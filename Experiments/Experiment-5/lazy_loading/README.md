# 🚀 Experiment 5 – Lazy Loading in React

## 📌 Project Overview

This experiment demonstrates the implementation of **Lazy Loading** in a React application to optimize performance and reduce initial bundle size.

The project contains a professional AI/ML portfolio dashboard that is dynamically loaded using `React.lazy()` and `Suspense`.

---

## 🎯 Objective

- Implement component-level lazy loading
- Improve performance by reducing initial load time
- Display fallback UI while components are loading
- Structure a scalable React application

---

## 🏗️ Project Structure
```bash
Experiment-5
└── lazy_loading
├── public
├── src
│ ├── assets
│ ├── Component
│ │ └── dashboard.jsx
│ ├── styles
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
├── index.html
├── package.json
└── eslint.config.js
```

---

## 🧠 What is Lazy Loading?

Lazy Loading is a performance optimization technique where components are loaded only when required rather than loading everything during the initial render.

In this project:

- The **Dashboard component** is dynamically imported
- `React.lazy()` is used for code splitting
- `Suspense` provides a fallback loading UI

---

## ⚙️ Implementation Approach

### Step 1 – Dynamic Import

const Dashboard = React.lazy(() => import("./Component/dashboard"));


### Step 2 – Wrap with Suspense
```
<Suspense fallback={<h2>Loading Dashboard...</h2>}>
<Dashboard />
</Suspense>
```

### Step 3 – Dashboard Component

The dashboard showcases:

- Applied ML Projects
- AI Tools Integration
- Data & Analytics Skills
- Currently Learning Section

Each skill is displayed in a dynamic card format with:

- Skill Level Indicator (🟢 🟡 🔴)
- Impact Statement
- Structured Grid Layout

---

## 📊 Dashboard Preview

### 🖥️ Main Dashboard

![WhatsApp Image 2026-02-13 at 11 04 15 AM](https://github.com/user-attachments/assets/b63c246e-b6b5-455b-b0c3-7f104160d572)


---

### ⏳ Loading State

<img width="1818" height="734" alt="image" src="https://github.com/user-attachments/assets/22ff907c-8e6e-4c46-b55a-ffd0aaba0786" />


---

## 💡 Key Features

- Component-based architecture
- Clean folder structure
- Performance optimization using Lazy Loading
- Dynamic rendering using map()
- Modular CSS styling
- Skill categorization with impact statements
- Professional UI layout

---

## 🚀 Benefits of Lazy Loading

- Faster initial page load
- Reduced JavaScript bundle size
- Better scalability
- Improved user experience
- Optimized performance for large-scale applications

---

## 🛠️ Technologies Used

- React.js
- Vite
- JavaScript (ES6+)
- CSS
- React.lazy()
- Suspense

---

## 📌 Conclusion

This experiment successfully demonstrates how Lazy Loading enhances performance in modern React applications by loading components only when necessary.

The structured dashboard showcases practical application of component architecture, dynamic rendering,
