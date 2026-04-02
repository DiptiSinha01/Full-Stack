# REST API Student Management System

## Overview

This is a Spring Boot REST API experiment that demonstrates core **CRUD (Create, Read, Update, Delete)** operations for managing student records. The API is built with Spring Boot 4.0.3, Spring Data JPA, and MySQL, providing a complete example of how to build a production-ready REST API.

## Tech Stack

- **Framework**: Spring Boot 4.0.3
- **Language**: Java 21
- **Database**: MySQL
- **ORM**: JPA (Jakarta Persistence API)
- **Build Tool**: Maven

## Project Structure

```
src/
├── main/
│   ├── java/
│   │   └── com/sample/Rest/sample/
│   │       ├── RestSampleApplication.java
│   │       ├── controller/
│   │       │   └── StudentController.java
│   │       ├── model/
│   │       │   └── Student.java
│   │       ├── repository/
│   │       │   └── StudentRepository.java
│   │       └── service/
│   │           └── StudentService.java
│   └── resources/
│       └── application.properties
```

## REST API Endpoints

The API provides the following endpoints for managing students:

### 1. **GET** - Retrieve All Students
**Endpoint**: `GET /api/students`

Fetches a list of all students in the database.

**Response Example**:
```json
[
  {
    "course": "cse",
    "id": 0,
    "name": null
  },
  {
    "course": "cse",
    "id": 69,
    "name": "dipti"
  }
]
```

![GET All Students](./images/get-all-students.png)

---

### 2. **GET** - Retrieve a Specific Student
**Endpoint**: `GET /api/students/{id}`

Retrieves a single student record by their ID.

**Example**: `GET /api/students/69`

**Response Example**:
```json
{
  "course": "cse",
  "hibernateLazyInitializer": {},
  "id": 69,
  "name": "dipti"
}
```

![GET Specific Student](./images/get-student-by-id.png)

---

### 3. **POST** - Create a New Student
**Endpoint**: `POST /api/students`

Creates a new student record in the database.

**Request Body Example**:
```json
{
  "course": "cse bda",
  "id": 124,
  "name": "aditya vardhan"
}
```

**Response Example**:
```json
{
  "course": "cse bda",
  "id": 124,
  "name": "aditya vardhan"
}
```

![POST Create Student](./images/post-create-student.png)

---

### 4. **PUT** - Update an Existing Student
**Endpoint**: `PUT /api/students/{id}`

Updates an existing student's information. Changes the student details for the given ID.

**Example**: `PUT /api/students/69`

**Request Body Example**:
```json
{
  "course": "cse AIML",
  "id": 69,
  "name": "dipti sinha"
}
```

**Response Example**:
```json
{
  "course": "cse AIML",
  "id": 69,
  "name": "dipti sinha"
}
```

![PUT Update Student](./images/put-update-student.png)

---

### 5. **DELETE** - Remove a Student
**Endpoint**: `DELETE /api/students/delete/{id}`

Deletes a student record from the database.

**Example**: `DELETE /api/students/delete/69`

**Response Example** (after deletion):
```json
[
  {
    "course": null,
    "id": 0,
    "name": null
  }
]
```

![DELETE Remove Student](./images/delete-student.png)

---

## Student Model

The Student entity has the following attributes:

| Field  | Type   | Description        |
|--------|--------|-------------------|
| id     | int    | Unique identifier |
| name   | String | Student's name    |
| course | String | Course enrolled   |

The data is stored in the `tbl_users` table in MySQL.

## How to Run

1. **Clone or download the project**
   ```bash
   git clone <repository-url>
   ```

2. **Configure MySQL Database**
   Update `src/main/resources/application.properties`:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/your_database
   spring.datasource.username=your_username
   spring.datasource.password=your_password
   ```

3. **Build the project**
   ```bash
   mvn clean install
   ```

4. **Run the application**
   ```bash
   mvn spring-boot:run
   ```

   The API will be available at `http://localhost:8080/api/students`

## Testing the Endpoints

You can test these endpoints using:
- **Postman**: Import the collection and test each endpoint
- **cURL**: Command-line requests
- **Insomnia**: REST client
- **VS Code REST Client**: Use the extension with `.http` files

Example cURL commands:
```bash
# Get all students
curl -X GET http://localhost:8080/api/students

# Get student by ID
curl -X GET http://localhost:8080/api/students/69

# Create new student
curl -X POST http://localhost:8080/api/students \
  -H "Content-Type: application/json" \
  -d '{"id":100,"name":"John","course":"CSE"}'

# Update student
curl -X PUT http://localhost:8080/api/students/69 \
  -H "Content-Type: application/json" \
  -d '{"id":69,"name":"Updated Name","course":"Updated Course"}'

# Delete student
curl -X DELETE http://localhost:8080/api/students/delete/69
```

## Key Components

### StudentController
Handles all HTTP requests and manages the routing to service methods.

### StudentService
Contains the business logic for CRUD operations on students.

### StudentRepository
Extends `JpaRepository` to provide database access methods.

### Student Entity
JPA entity class representing the student table structure.

## Learning Outcomes

This project demonstrates:
- ✅ Building a RESTful API with Spring Boot
- ✅ HTTP methods: GET, POST, PUT, DELETE
- ✅ Request and response handling
- ✅ Database integration with JPA
- ✅ MVC architecture pattern
- ✅ CRUD operations

## Notes

- The DELETE endpoint uses a path of `/delete/{id}` instead of the standard RESTful pattern
- Student IDs are manually assigned (not auto-generated)
- The repository uses MySQL for data persistence

---

**Created**: 2026  
**Purpose**: Educational REST API experiment
