# Experiment-10: WebSocket Chat Application

## Overview

This is a **full-stack real-time chat application** built with **WebSocket technology**. It demonstrates how to establish bidirectional communication between frontend and backend for real-time messaging without the need for continuous API polling.

### Key Features

✅ **Real-time Messaging** - Messages delivered instantly using WebSocket  
✅ **Multiple Users** - Support for multiple concurrent users in the same chat  
✅ **Connection Status** - Visual indicator showing connection state  
✅ **User Authentication** - Username-based user identification  
✅ **Modern UI** - Beautiful gradient design with smooth animations  
✅ **Error Handling** - Graceful error messages when backend is unavailable  

---

## Project Structure

```
Experiment-10/
├── Web_Socket_Frontend/          # React.js Frontend
│   ├── src/
│   │   ├── Components/
│   │   │   ├── Chat.jsx         # Main chat component with WebSocket logic
│   │   │   ├── MessageInput.jsx # Message input component
│   │   │   └── MessageList.jsx  # Message display component
│   │   ├── App.jsx              # Root app component
│   │   ├── App.css              # App styling
│   │   ├── index.css            # Global styling
│   │   └── main.jsx             # Entry point
│   ├── package.json
│   ├── vite.config.js
│   └── index.html
│
└── Backend/                      # Spring Boot Backend
    ├── src/
    │   ├── main/java/com/AML_2B/Demo_WebSocket/
    │   │   ├── config/
    │   │   │   └── WebSocketConfig.java    # WebSocket configuration
    │   │   ├── controller/
    │   │   │   └── ChatController.java     # Message handling
    │   │   ├── model/
    │   │   │   └── Message.java           # Message model
    │   │   └── DemoWebSocketApplication.java
    │   └── test/
    ├── pom.xml                  # Maven configuration
    └── target/
```

---

## Technology Stack

### Frontend
- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **SockJS** - WebSocket emulation library
- **STOMP** - Messaging protocol over WebSocket

### Backend
- **Spring Boot 4.0.5** - Application framework
- **Spring WebSocket** - WebSocket support
- **Spring Messaging** - Message handling
- **Apache Tomcat** - Web server (port 8080)

---

## Screenshots

### Backend Running
The Spring Boot backend server starts on `http://localhost:8080` and handles WebSocket connections.

![Backend Console](image1.png)

### Frontend UI - Connected State
Beautiful chat interface showing real-time messaging between multiple users with connection status indicator.

![Frontend Chat UI](image2.png)

### Backend Configuration
WebSocket configuration with STOMP endpoints and cross-origin support for React development.

![WebSocket Config](image3.png)

### Chat Controller
Message handler that broadcasts messages to all connected clients.

![Chat Controller](image4.png)

### Message Model
Simple data model for chat messages with sender and content fields.

![Message Model](image5.png)

### Backend Logs
Complete initialization logs showing successful WebSocket server startup.

![Backend Logs](image6.png)

---

## Installation & Setup

### Prerequisites
- **Node.js** (v16+) and npm
- **Java 11+** (for backend)
- **Maven** (for building backend)
- Port **8080** available (backend)
- Port **5173** or **5174+** available (frontend)

### Backend Setup

1. **Navigate to backend directory:**
   ```bash
   cd Experiment-10/Backend
   ```

2. **Build the project:**
   ```bash
   mvn clean install
   ```

3. **Run the Spring Boot application:**
   ```bash
   mvn spring-boot:run
   ```
   
   Or run the JAR file directly:
   ```bash
   java -jar target/DemoWebSocket-0.0.1-SNAPSHOT.jar
   ```

   ✅ Backend will start on `http://localhost:8080`

### Frontend Setup

1. **Navigate to frontend directory:**
   ```bash
   cd Experiment-10/Web_Socket_Frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

   ✅ Frontend will start on `http://localhost:5173` (or next available port)

---

## How to Use

1. **Start the Backend** first (port 8080)
2. **Start the Frontend** (port 5173+)
3. **Open the chat application** in your browser
4. **Enter your name** in the input field
5. **Wait for connection** status to show 🟢 Connected
6. **Type a message** and click Send
7. **Open another browser tab** with the same URL and repeat steps 4-6
8. See **real-time messages** appear on both tabs instantly!

---

## API Endpoints & WebSocket Flow

### WebSocket Connection
```
ws://localhost:8080/ws
```

### STOMP Endpoints

**Client sends message to:**
```
/app/chat
```

**Client subscribes to receive messages from:**
```
/topic/messages
```

### Message Format
```json
{
  "sender": "UserName",
  "content": "Hello, how are you?"
}
```

---

## How WebSocket Works

### Traditional HTTP Request/Response
```
Client → Request → Server
Client ← Response ← Server
(Polling required for new data)
```

### WebSocket (Bidirectional Connection)
```
Client ←→ Persistent Connection ←→ Server
   (Messages flow in both directions instantly)
```

**Advantages:**
- ✅ **Lower latency** - No HTTP overhead
- ✅ **Real-time updates** - Instant message delivery
- ✅ **Reduced bandwidth** - Only message data, no HTTP headers
- ✅ **Better performance** - Single persistent connection

---

## Frontend Components

### Chat.jsx
Main component handling WebSocket connection, state management, and message broadcasting.

**Key Functions:**
- `useEffect()` - Establishes WebSocket connection on mount
- `sendMessage()` - Publishes message to backend
- Subscribes to `/topic/messages` for incoming messages

### MessageList.jsx
Displays all messages in a scrollable container with sender names.

### MessageInput.jsx
Input field and send button with connection status feedback.

---

## Backend Components

### WebSocketConfig.java
Configures WebSocket support with STOMP protocol and cross-origin settings.

**Endpoints:**
- WebSocket: `/ws`
- STOMP: `/app` (client messages), `/topic` (broadcasts)

### ChatController.java
Handles `@MessageMapping("/chat")` to process incoming messages and broadcast to all subscribers.

### Message.java
Simple POJO with `sender` and `content` fields.

---

## Connection Status Indicators

| Status | Indicator | Meaning |
|--------|-----------|---------|
| Connected | 🟢 Green | WebSocket connected, ready to send messages |
| Disconnected | 🔴 Red | Backend unavailable or connection lost |
| Error | ⚠️ Warning | Connection failed, check backend logs |

---

## Troubleshooting

### Issue: "Disconnected - Backend unavailable"
**Solution:** 
- Ensure backend is running on `http://localhost:8080`
- Check backend logs for errors
- Verify firewall isn't blocking port 8080

### Issue: Messages not appearing
**Solution:**
- Check browser console for JavaScript errors
- Verify both users are on the same URL
- Ensure backend `/topic/messages` endpoint is working

### Issue: Port already in use
**Solution:**
- For backend: Change port in `application.properties`
- For frontend: Vite will automatically use next available port

### Issue: CORS errors
**Solution:**
- Backend already configured with `@CrossOrigin("*")`
- Frontend connects via WebSocket (not HTTP), so CORS is bypassed

---

## Development Notes

### Adding Features
- **User list** - Track active users
- **Private messages** - Add user-to-user messaging
- **Message history** - Store messages in database
- **Typing indicator** - Show when someone is typing
- **User avatars** - Display user profile pictures

### Performance Optimization
- Use message batching for high-volume chats
- Implement message pagination
- Add Redis for horizontal scaling (multiple instances)

---

## Running Tests

### Backend Tests
```bash
cd Backend
mvn test
```

### Frontend Tests
```bash
cd Web_Socket_Frontend
npm run test
```

---

## Deployment

### Backend (Spring Boot)
```bash
java -jar target/DemoWebSocket-0.0.1-SNAPSHOT.jar --server.port=8080
```

### Frontend (React)
```bash
npm run build
# Deploy the 'dist' folder to a CDN or static hosting
```

---

## References

- [Spring WebSocket Documentation](https://spring.io/guides/gs/messaging-stomp-websocket/)
- [STOMP Protocol Specification](https://stomp.github.io/)
- [SockJS Documentation](https://sockjs.github.io/sockjs-protocol/sockjs-protocol-1.0.html)
- [React Hooks Guide](https://react.dev/reference/react/hooks)

---

## License

This project is part of Full-Stack learning experiments. Feel free to use and modify.

---

## Author Notes

This experiment demonstrates the power of WebSocket technology for real-time applications. The STOMP protocol implementation makes it easy to work with message brokers and provides a clean, decoupled architecture for handling messages on both client and server sides.

**Key Takeaways:**
- WebSocket enables true bidirectional communication
- STOMP simplifies message-oriented architecture
- React hooks make it easy to manage WebSocket state
- Spring WebSocket provides enterprise-grade reliability

---

## Quick Start Command

**Terminal 1 (Backend):**
```bash
cd Backend && mvn spring-boot:run
```

**Terminal 2 (Frontend):**
```bash
cd Web_Socket_Frontend && npm run dev
```

Then open `http://localhost:5173` in multiple browser tabs and start chatting! 🚀
