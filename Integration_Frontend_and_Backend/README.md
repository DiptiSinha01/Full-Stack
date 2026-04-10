# Student Management System - Full Stack Integration

A complete full-stack application demonstrating **CRUD Operations** (Create, Read, Update, Delete) with seamless frontend-backend integration. This project integrates a **React.js frontend** with a **Spring Boot backend** connected to a **MySQL database**.

---

## 🎯 Project Overview

The Student Management System is a web application that allows users to manage student records with complete CRUD functionality. The system demonstrates real-world integration patterns between a modern React frontend and a robust Spring Boot backend API.

### Key Features
- ✅ **Create** - Add new student records
- ✅ **Read** - View all students in a responsive list
- ✅ **Update** - Edit existing student information
- ✅ **Delete** - Remove student records
- 🗄️ **Database Integration** - MySQL database for persistent storage
- 🔗 **REST API** - Spring Boot REST endpoints
- 🎨 **Modern UI** - React-based responsive interface

---

## 🛠️ Technology Stack

### Frontend
- **React.js** - UI library
- **Vite** - Build tool and development server
- **CSS** - Styling
- **Axios/Fetch** - HTTP client for API calls

### Backend
- **Spring Boot** - Java framework for REST API
- **Spring Data JPA** - ORM for database operations
- **MySQL** - Relational database

### Tools & Services
- **Maven** - Build management
- **Tomcat** - Application server

---

## 📸 CRUD Operations Demonstration

### 1️⃣ **CREATE - Add New Student**

The user interface provides a form to add new student records. Enter the student ID, name, and course information, then click "Add Student".

<img width="1071" height="431" alt="image" src="https://github.com/user-attachments/assets/31343305-4964-41ad-8e92-b7324b02c2f4" />


*Student Management System - Add Student Form with input fields*

---

### 2️⃣ **READ - View All Students**

The Student List section displays all students in a card-based layout. Each student card shows:
- Student ID
- Student Name
- Course enrolled in
- Action buttons (Edit/Delete)

![WhatsApp Image 2026-04-10 at 11 56 47 AM](https://github.com/user-attachments/assets/a5584060-29cf-42bb-999d-f9c68d4c21fa)





*Student Management System - Student List showing all enrolled students with their details*

---

### 3️⃣ **UPDATE - Edit Student Information**

Click the "Edit" button on any student card to modify their information. The edit form pre-populates with current data, allowing users to update the student's details.

![WhatsApp Image 2026-04-10 at 12 19 38 PM](https://github.com/user-attachments/assets/71cafc5c-ffa1-4625-9eed-66beaf6b6a27)
![WhatsApp Image 2026-04-10 at 12 19 52 PM](https://github.com/user-attachments/assets/f3920541-805d-48ac-964b-fd2e1273cb35)

*Edit Student Interface - Modify existing student information (ID, Name, Course)*

---

### 4️⃣ **DELETE - Remove Student Records**

Each student card includes a "Delete" button for removing records. The delete operation removes the student from the database and updates the UI.

![WhatsApp Image 2026-04-10 at 12 18 17 PM](https://github.com/user-attachments/assets/ac33eaec-af2e-42bc-b4c8-3b8b423189f9)

*Student List - Delete functionality available for each student record*

---

## 🗄️ Database Setup

### MySQL Database Configuration

The application uses a MySQL database named `new_spring` with the following structure:

**Tables Created:**
- `student` - Stores student information (ID, Name, Course)
- `tbl_users` - Stores user authentication data

```sql
Database: new_spring
Tables: 
├── student
└── tbl_users
```

![WhatsApp Image 2026-04-10 at 12 00 54 PM](https://github.com/user-attachments/assets/e9c7728b-1047-41bc-9a31-019c17b0db44)

*MySQL Database - Showing the new_spring database with student records and user table structure*

**Sample Data Stored:**
```
| id | course              | name      | password | username |
|----|---------------------|-----------|----------|----------|
| 0  | AI ML              | DIPTI     | NULL     | NULL     |
| 1  | BDA                | ADITYA    | NULL     | NULL     |
| 2  | CSE                | RAMNEEK   | NULL     | NULL     |
| 3  | CC                 | SHIVANGI  | NULL     | NULL     |
| 4  | BSC                | SAKSHI    | NULL     | NULL     |
| 5  | FASHION DESIGNING  | SNEHA     | NULL     | NULL     |
```

---

## 🚀 Backend Server

### Spring Boot Application Startup

The backend is a Spring Boot application running on **Tomcat server (Port 8081)** with MySQL database connection.

![WhatsApp Image 2026-04-10 at 11 58 11 AM](https://github.com/user-attachments/assets/1110544d-4a79-4439-bfaf-4757172c7d2e)

*Spring Boot Application - Starting RestSampleApplication on port 8081 with:*
- *Java 21.0.7 runtime*
- *Tomcat initialized on port 8081*
- *MySQL database connection established*
- *JPA/Hibernate ORM configured*
- *Repository scanning and initialization complete*

**Server Configuration:**
- Host: `localhost`
- Port: `8081`
- Database URL: `jdbc:mysql://localhost:3306/new_spring`
- Database Driver: MySQL Connector/J

---

## 📁 Project Structure

```
Integration_Frontend_and_Backend/
├── Backend/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   └── c/s/Rest/sample/
│   │   │   │       ├── RestSampleApplication.java
│   │   │   │       ├── controller/
│   │   │   │       ├── model/
│   │   │   │       ├── repository/
│   │   │   │       └── service/
│   │   │   └── resources/
│   │   │       └── application.properties
│   │   └── test/
│   ├── pom.xml
│   └── mvnw
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── vite.config.js
│   ├── package.json
│   └── index.html
│
└── README.md
```

---

## 🔧 How to Run

### Prerequisites
- Java 21+
- Node.js 18+
- MySQL Server running
- Maven

### Backend Setup

1. Navigate to the Backend folder:
```bash
cd Backend
```

2. Create MySQL database:
```sql
CREATE DATABASE new_spring;
```

3. Build and run Spring Boot application:
```bash
mvn clean install
mvn spring-boot:run
```

The backend will start on `http://localhost:8081`

### Frontend Setup

1. Navigate to the frontend folder:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will be available at `http://localhost:5173` (or as shown in terminal)

---

## 🔗 API Endpoints

### Student Management Endpoints

```
GET    /api/students              - Get all students
GET    /api/students/{id}         - Get student by ID
POST   /api/students              - Create new student (CREATE)
PUT    /api/students/{id}         - Update student (UPDATE)
DELETE /api/students/{id}         - Delete student (DELETE)
```

---

## 📊 Data Flow

```
Frontend (React) 
    ↓ (HTTP Request)
    ↓
Backend (Spring Boot REST API)
    ↓ (Query/Command)
    ↓
Database (MySQL)
    ↓ (Response)
    ↓
Backend REST Response
    ↓ (JSON Response)
    ↓
Frontend UI Update
```

---

## ✨ Features Implemented

### Create (C)
- Add new student records through form submission
- Validation of input fields
- Auto-generated student ID
- Real-time UI update after creation

### Read (R)
- Display all students in card layout
- View student details (ID, Name, Course)
- Real-time data fetching from backend
- Responsive list view

### Update (U)
- Edit existing student information
- Pre-populated form with current data
- Update reflected immediately in UI
- Confirmation on successful update

### Delete (D)
- Remove student records with single click
- Confirmation before deletion
- Immediate UI refresh
- Database record deletion

---

## 🎓 Learning Outcomes

This project demonstrates:
- Full-stack web application development
- Frontend-Backend communication via REST API
- Database design and integration
- CRUD operations implementation
- Spring Boot REST API development
- React component development
- State management in frontend
- Responsive UI design

---

## 📝 Notes

- The application uses a simple authentication system with the `tbl_users` table
- All CRUD operations are performed in real-time
- The frontend makes HTTP requests to the backend API
- MySQL database persists all student data
- Cross-origin resource sharing (CORS) is configured for frontend-backend communication

---

## 🤝 Contributing

This is an educational project demonstrating full-stack integration. Feel free to enhance it with:
- Authentication and authorization
- Input validation improvements
- Error handling enhancements
- Additional features like student grades, attendance tracking
- Pagination and search functionality

---

## 📄 License

Educational Project - Free to use and modify

---

**Last Updated:** April 2026

**Status:** ✅ All CRUD operations fully integrated and functional
