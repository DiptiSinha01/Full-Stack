# Spring Security + JWT Authentication Experiment

A comprehensive Spring Boot application demonstrating authentication and authorization using **JWT (JSON Web Tokens)** with Spring Security. This experiment showcases a complete user authentication workflow including user registration, login, and secured API access.

## 📋 Project Overview

This Spring Boot application implements a robust authentication and authorization system using:
- **Spring Security 6.x** for authentication and authorization
- **JWT (JSON Web Tokens)** for stateless token-based authentication
- **Spring Data JPA** for database operations
- **MySQL** as the database backend
- **Java 21** with Spring Boot 4.0.5

### Key Features
✅ User Registration  
✅ User Login with JWT Token Generation  
✅ JWT Token Validation via Filter Chain  
✅ Secured Endpoints with Role-Based Access  
✅ Remember-Me Functionality  
✅ Student Data Management API  
✅ Security Logging and Debugging  

---

## 🏗️ Project Structure

```
src/main/java/com/dipti/JWT/
├── JwtApplication.java                 # Main Spring Boot Application
├── controller/
│   ├── HelloController.java
│   ├── StudentController.java          # Student CRUD Operations
│   └── UserController.java             # User Registration & Login
├── filter/
│   └── JwtFilter.java                  # JWT Token Validation Filter
├── repository/
│   └── UserRepository.java             # User Data Access
├── securityconfig/
│   └── SecurityConfig.java             # Security Configuration
├── service/
│   ├── JwtService.java                 # JWT Token Generation & Validation
│   ├── MyUserDetailService.java        # Custom User Details Service
│   └── UserService.java                # User Business Logic
└── usermodel/
    ├── Student.java
    ├── UserEntity.java
    └── UserPrincipal.java
```

---

## 🔐 Security Architecture

### Authentication Flow

```
User Input (Username + Password)
         ↓
    Login Endpoint
         ↓
    Authenticate with Spring Security
         ↓
    Generate JWT Token
         ↓
    Return Token to Client
         ↓
    Client Stores Token
         ↓
    Include Token in Authorization Header (Bearer)
         ↓
    JwtFilter Validates Token
         ↓
    Access Protected Resources
```

### Key Components

1. **SecurityConfig.java** - Defines security policies, authentication manager, and HTTP security configuration
2. **JwtService.java** - Handles JWT token generation, parsing, and validation
3. **JwtFilter.java** - Intercepts requests to validate JWT tokens
4. **MyUserDetailService.java** - Implements custom user details loading from database

---

## 🚀 API Endpoints

### 1. User Registration
**Endpoint:** `POST /register`  
**Description:** Register a new user  
**Request Body:**
```json
{
  "id": 69,
  "username": "Dipti",
  "password": "Dipti#01"
}
```

**Response:** `200 OK`
```json
{
  "id": 69,
  "username": "Dipti",
  "password": "$2a$12$2FBtvzzIqv0r9ku5l2Bx.KauLSyn3zKYq/Cj6n7xKK0Jpij.41QS"
}
```

---

### 2. User Login
**Endpoint:** `POST /login`  
**Description:** Authenticate user and receive JWT token  
**Request Body:**
```json
{
  "id": 69,
  "username": "Dipti",
  "password": "Dipti#01"
}
```

**Response:** `200 OK`
```json
{
  "id": 69,
  "username": "Dipti",
  "password": "eyJhbGciOiJJUzI1NiJ9.eyJzdWIiOiJEaXB0aSIsImlhdCI6MTY3NDY0Cjc1MTY5NTxk3mE5MTk3Myw1ZXhwIjoxNzc1MTJMjk1OTczfQ.Q8pPRDbr144CvqXsbSjqK0AyR1DcKMTvozc0IdeL80k"
}
```

---

### 3. Get Students (Protected Endpoint)
**Endpoint:** `GET /students`  
**Description:** Retrieve student data (requires authentication)  
**Headers:** 
- `Authorization: Bearer <JWT_TOKEN>`

**Response:** `200 OK`
```json
[
  {
    "id": 1,
    "name": "Ramneek Kaur",
    "marks": 89
  },
  {
    "id": 2,
    "name": "Anurag Shalakya",
    "marks": 92
  }
]
```

---

## 🛠️ Technologies Used

| Technology | Version | Purpose |
|-----------|---------|---------|
| Spring Boot | 4.0.5 | Web Framework |
| Spring Security | 6.x | Authentication & Authorization |
| Spring Data JPA | - | ORM & Database Access |
| MySQL | - | Database |
| JWT (jjwt) | - | Token Generation & Validation |
| Java | 21 | Programming Language |
| Maven | - | Build Tool |

---

## ⚙️ Configuration

### Database Configuration
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/new_spring
spring.datasource.username=root
spring.datasource.password=Noneofyourbusiness#01
spring.jpa.hibernate.ddl-auto=update
server.port=8081
```

### Logging Configuration
```properties
logging.level.org.springframework.security=DEBUG
logging.level.org.hibernate=ERROR
```

---

## 📸 API Testing Screenshots

### Screenshot 1: User Registration
![User Registration - POST /register](https://imgur.com/placeholder1.png)
- Creates a new user account with encrypted password
- Password is hashed using BCrypt
- Returns user details with encrypted password

### Screenshot 2: User Login
![User Login - POST /login](https://imgur.com/placeholder2.png)
- Authenticates user credentials
- Generates and returns JWT token
- Token can be used for subsequent API calls

### Screenshot 3: Protected Endpoint with JWT
![Get Students - GET /students with Bearer Token](https://imgur.com/placeholder3.png)
- Requires valid JWT token in Authorization header
- Token is validated by JwtFilter
- Returns protected resource data

---

## 🔑 JWT Token Structure

A JWT token consists of three parts separated by dots (`.`):

```
header.payload.signature
```

### Example Token Breakdown
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9  [Header]
.eyJzdWIiOiJEaXB0aSIsImlhdCI6MTY0MDAw  [Payload]
MDAwfQ.8Z-2qnLwQ4gJ8xJ9kL2pZ-xL          [Signature]
```

### Payload Contains
- `sub` (subject) - Username
- `iat` (issued at) - Token creation time
- `exp` (expiration) - Token expiration time
- Additional custom claims

---

## 🔒 Security Features

1. **Password Encryption** - BCrypt hashing algorithm
2. **JWT Token Validation** - Cryptographic signature verification
3. **Token Expiration** - Automatic token invalidation
4. **CORS Configuration** - Controlled cross-origin requests
5. **CSRF Protection** - Cross-Site Request Forgery prevention
6. **SQL Injection Prevention** - JPA parameterized queries
7. **Role-Based Access Control** - Fine-grained authorization

---

## 🚀 Running the Application

### Prerequisites
- Java 21 or higher
- MySQL Server running
- Maven 3.6+

### Steps

1. **Clone/Navigate to project directory**
   ```bash
   cd c:\Users\HP\Desktop\Full-Stack\Experiments\Experiment-9
   ```

2. **Create MySQL Database**
   ```sql
   CREATE DATABASE new_spring;
   ```

3. **Build the project**
   ```bash
   mvn clean install
   ```

4. **Run the application**
   ```bash
   mvn spring-boot:run
   ```

5. **Server starts on port 8081**
   ```
   http://localhost:8081
   ```

---

## 📝 Testing Workflow

### 1. Register a User
```bash
POST http://localhost:8081/register
Content-Type: application/json

{
  "username": "testuser",
  "password": "Test@1234"
}
```

### 2. Login and Get Token
```bash
POST http://localhost:8081/login
Content-Type: application/json

{
  "username": "testuser",
  "password": "Test@1234"
}
```

### 3. Use Token to Access Protected Resources
```bash
GET http://localhost:8081/students
Authorization: Bearer <received_token>
```

---

## 🐛 Debugging

The application includes comprehensive logging:

```properties
logging.level.org.springframework.security=DEBUG
```

Check console output for:
- Authentication attempts
- Token validation results
- Security filter chain execution
- Authorization decisions

---

## 📚 Key Learnings

✅ How JWT tokens work and why they're better than sessions  
✅ Implementing custom authentication with Spring Security  
✅ Creating and validating JWT tokens  
✅ Building secure REST APIs  
✅ Implementing role-based access control  
✅ Password encryption best practices  
✅ Token-based stateless authentication  

---

## 📖 References

- [Spring Security Documentation](https://spring.io/projects/spring-security)
- [JWT Introduction](https://jwt.io/)
- [Spring Boot Guide](https://spring.io/projects/spring-boot)
- [MySQL Documentation](https://dev.mysql.com/doc/)

---

## 👤 Author
**Dipti** - Spring Security & JWT Authentication Experiment  
*Experiment 9 - Full Stack Learning*

---

## 📄 License
This experiment is part of the Full Stack Learning series.

**Last Updated:** April 3, 2026
