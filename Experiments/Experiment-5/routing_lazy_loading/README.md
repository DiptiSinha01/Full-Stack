# 🚀 Experiment – Routing with Lazy Loading in React

## 📌 Project Overview

This project demonstrates **Route-Based Lazy Loading** using React Router and React Lazy (`React.lazy()` + `Suspense`).

The application contains three pages:

- 🏠 Home
- ℹ️ About
- 📞 Contact

Navigation (toggle between routes) happens dynamically, and each page is lazily loaded only when accessed.

This ensures optimal performance and scalable architecture.

---

## 🎯 Objectives

- Implement client-side routing using React Router
- Enable route toggling between multiple pages
- Apply lazy loading to all route components
- Display fallback UI during component loading
- Optimize bundle size and performance

---

## 🏗️ Project Structure
```bash
routing_lazy_loading
├── public
├── src
│ ├── assets
│ ├── pages
│ │ ├── home.jsx
│ │ ├── about.jsx
│ │ └── contact.jsx
│ ├── App.jsx
│ ├── App.css
│ ├── main.jsx
│ └── index.css
├── index.html
├── package.json
└── eslint.config.js
```

---

## 🧠 Core Concepts Used

### 1️⃣ Client-Side Routing

Routing is handled using:

BrowserRouter
Routes
Route


This allows seamless page navigation without reloading the browser.

---

### 2️⃣ Route-Based Lazy Loading

Each page is dynamically imported:

const Home = lazy(() => import('./pages/Home.js'));
const About = lazy(() => import('./pages/About.js'));
const Contact = lazy(() => import('./pages/Contact.js'));


This ensures:

- Components are loaded only when their route is accessed
- JavaScript bundle is split into smaller chunks
- Faster initial load time

---

### 3️⃣ Suspense Fallback UI

<Suspense fallback={<div className="loading">Loading...</div>}>


While the component is loading, a loading message is displayed.

---

## 🔁 How Toggle Between Pages Works

When a user navigates:

- `/` → Home loads lazily
- `/about` → About loads lazily
- `/contact` → Contact loads lazily

Each time the route changes:

1. React triggers dynamic import
2. Loading UI appears briefly
3. Component renders after load

This creates smooth route toggling with performance optimization.

---

## ⚙️ Complete App.jsx Code
```
import './App.css';
import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = lazy(() => import('./pages/Home.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));

function App() {
  return(
    <BrowserRouter>
      <Suspense fallback={<div className="loading">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App;
```


---

## 📸 Screenshots

### 📞 Contact Page
<img width="465" height="299" alt="image" src="https://github.com/user-attachments/assets/1db65c5d-6d55-45f3-a458-a175bc61d819" />



### ⏳ Loading State (Contact Page)
![WhatsApp Image 2026-02-13 at 2 15 55 PM](https://github.com/user-attachments/assets/80c8b78a-3b8f-4694-9aa9-9de9ceb63dad)



---

## 📁 Images Folder Structure

Create this:
```bash
routing_lazy_loading
└── images
├── contact.png
└── loading-contact.png
```

---

## 🚀 Key Features

- Three-page navigation system
- Route-level code splitting
- Dynamic component loading
- Fallback loading UI
- Clean modular folder structure
- Scalable frontend architecture

---

## 📊 Performance Benefits

- Reduced initial bundle size
- Faster application startup
- Better scalability
- Efficient resource utilization
- Improved user experience

---

## 🛠️ Technologies Used

- React.js
- React Router DOM
- JavaScript (ES6+)
- Vite
- React.lazy()
- Suspense

---

## 📌 Conclusion

This experiment demonstrates a real-world frontend optimization technique where routing and lazy loading work together to enhance performance.

All three pages (Home, About, Contact) are dynamically loaded, ensuring efficient resource management and scalable application de
