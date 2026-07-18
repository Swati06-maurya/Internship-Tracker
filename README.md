<div align="center">

#  Internship Tracker

### A Full Stack Web Application for Managing Internship Applications

Built with **HTML, CSS, JavaScript, Node.js, Express.js & MongoDB**

![HTML](https://img.shields.io/badge/HTML-5-orange?style=for-the-badge&logo=html5)
![CSS](https://img.shields.io/badge/CSS-3-blue?style=for-the-badge&logo=css3)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?style=for-the-badge&logo=javascript)
![Node.js](https://img.shields.io/badge/Node.js-Express-green?style=for-the-badge&logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-darkgreen?style=for-the-badge&logo=mongodb)

</div>

---

# Project Overview

Internship Tracker is a Full Stack CRUD Web Application that helps students organize and manage their internship applications efficiently.

The application allows users to add, update, delete, search, filter, and sort internship records while storing all data permanently in MongoDB.

This project demonstrates complete CRUD operations along with REST API integration between the frontend and backend.

---

#  Features

## Frontend Features

- ➕ Add Internship
- ✏️ Edit Internship
- 🗑️ Delete Internship
- 🔍 Search Internship
- 🎯 Filter by Status
- ↕️ Sort by Company Name
- 📊 Dashboard Statistics
- 📱 Responsive User Interface

---

## Backend Features

- REST API using Express.js
- MongoDB Database Integration
- Mongoose Schema
- API Error Handling
- CORS Enabled
- Environment Variable Support

---

# 🛠 Tech Stack

## Frontend

- HTML5
- CSS3
- JavaScript (ES6)

## Backend

- Node.js
- Express.js

## Database

- MongoDB
- Mongoose

## Development Tools

- Visual Studio Code
- Postman
- MongoDB Compass
- Git
- GitHub

---

#  Project Structure

```
Internship-Tracker
│
├── frontend
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── backend
│   ├── config
│   │   └── db.js
│   │
│   │
│   ├── models
│   │   └── Internship.js
│   │
│   ├── routes
│   │   └── internshipRoutes.js
│   │
│   ├── .env
│   ├── package.json
│   └── server.js
│
├── screenshots
│
└── README.md
```

---

# ⚙ Installation

## 1️⃣ Clone Repository

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/Internship-Tracker.git
```

---

## 2️⃣ Open Project

```bash
cd Internship-Tracker
```

---

## 3️⃣ Install Backend Packages

```bash
cd backend
npm install
```

---

## 4️⃣ Configure Environment Variables

Create a file named

```
.env
```

Add

```env
PORT=5000
MONGO_URI=YOUR_MONGODB_CONNECTION_STRING
```

---

## 5️⃣ Start Backend

```bash
npm run dev
```

---

## 6️⃣ Start Frontend

Open

```
frontend/index.html
```

using **Live Server**.

---

# 🌐 API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/internships` | Get all internships |
| POST | `/api/internships` | Add internship |
| PUT | `/api/internships/:id` | Update internship |
| DELETE | `/api/internships/:id` | Delete internship |

---

# 🧪 Testing

The backend APIs were tested using **Postman**.

CRUD operations tested:

- ✅ GET
- ✅ POST
- ✅ PUT
- ✅ DELETE

---

# 📸 Screenshots

Create a folder named

```
screenshots
```

Add these screenshots:

```
screenshots/

HomePage.png

Dashboard.png

AddInternship.png

Search.png

Filter.png

MongoDB.png

Postman.png
```

Then display them like this:

```markdown
## Home Page

![Home](screenshots/HomePage.png)

## Dashboard

![Dashboard](screenshots/Dashboard.png)
```

---

# 🚀 Future Improvements

- User Authentication (Login & Signup)
- JWT Authentication
- Email Notifications
- Resume Upload
- Internship Deadline Reminder
- Company Logo Support
- Dark Mode
- Deployment on Render
- Responsive Mobile Design

---

# 📚 Learning Outcomes

Through this project I learned:

- CRUD Operations
- REST APIs
- Frontend & Backend Integration
- MongoDB Database Operations
- Express.js Routing
- Mongoose Models
- API Testing with Postman
- Git & GitHub Basics

---

# 👩‍💻 Author

**Swati**

Second Year Computer Science Engineering Student

Passionate about Web Development and Full Stack Development.

GitHub:

```
https://github.com/Swati06-maurya
```

LinkedIn:

```
https://linkedin.com/in/Swati-Maurya
```

---

# ⭐ Support

If you found this project helpful,

please ⭐ Star this repository.

---

<div align="center">

### Thank you for visiting my project ❤️

Made with ❤️ using HTML, CSS, JavaScript, Node.js, Express.js and MongoDB

</div>
