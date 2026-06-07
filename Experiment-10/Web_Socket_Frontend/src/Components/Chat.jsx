import { useEffect, useState, useRef } from "react";
import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";

import MessageList from "./MessageList";
import MessageInput from "./MessageInput";

function Chat() {
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const [connectionError, setConnectionError] = useState(null);
  const clientRef = useRef(null);

  useEffect(() => {
    try {
      const client = new Client({
        webSocketFactory: () => new SockJS("http://localhost:8080/ws"),
        reconnectDelay: 5000,

        onConnect: () => {
          console.log("Connected ✅");
          setIsConnected(true);
          setConnectionError(null);

          client.subscribe("/topic/messages", (msg) => {
            const data = JSON.parse(msg.body);
            setMessages((prev) => [...prev, data]);
          });
        },

        onStompError: (frame) => {
          console.error("STOMP error:", frame);
          setIsConnected(false);
          setConnectionError("Failed to connect to chat server");
        },

        onDisconnect: () => {
          setIsConnected(false);
        },
      });

      client.activate();
      clientRef.current = client;

      return () => {
        try {
          client.deactivate();
        } catch (e) {
          console.log("Error deactivating client:", e);
        }
      };
    } catch (error) {
      console.error("Error setting up WebSocket:", error);
      setConnectionError("Failed to initialize chat connection");
    }
  }, []);

  const sendMessage = (text) => {
    if (!username) {
      alert("Enter username first");
      return;
    }

    if (!isConnected) {
      alert("Not connected to server. Please make sure the backend is running.");
      return;
    }

    if (clientRef.current) {
      clientRef.current.publish({
        destination: "/app/chat",
        body: JSON.stringify({
          sender: username,
          content: text,
        }),
      });
    }
  };

  return (
    <div className="chat-box">
      <div className={`status-indicator ${isConnected ? 'status-connected' : 'status-disconnected'}`}>
        <span>{isConnected ? '🟢' : '🔴'}</span>
        <span><b>{isConnected ? 'Connected' : 'Disconnected'}</b></span>
      </div>

      {connectionError && (
        <div className="error-message">
          <span>⚠️</span>
          <span>{connectionError}</span>
        </div>
      )}

      <input
        className="username"
        placeholder="Enter your name..."
        onChange={(e) => setUsername(e.target.value)}
      />

      <MessageList messages={messages} />
      <MessageInput sendMessage={sendMessage} isConnected={isConnected} />
    </div>
  );
}

export default Chat;