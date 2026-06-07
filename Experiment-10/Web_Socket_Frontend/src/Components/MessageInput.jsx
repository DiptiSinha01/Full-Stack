import { useState } from "react";

function MessageInput({ sendMessage, isConnected }) {
  const [text, setText] = useState("");

  return (
    <div className="input-area">
      <input
        value={text}
        placeholder="Type message..."
        onChange={(e) => setText(e.target.value)}
        disabled={!isConnected}
      />
      <button
        onClick={() => {
          sendMessage(text);
          setText("");
        }}
        disabled={!isConnected}
        style={{
          opacity: isConnected ? 1 : 0.5,
          cursor: isConnected ? "pointer" : "not-allowed"
        }}
      >
        Send
      </button>
    </div>
  );
}

export default MessageInput;