# 📝 To-Do App (MERN + Docker+ci/cd+ aws ec2)

A full-stack To-Do application built using the **MERN stack** (MongoDB, Express, React, Node.js) and containerized using **Docker**.

---

## 🚀 Features

* ✅ Create, Read, Update, Delete (CRUD) tasks
* 🌐 REST API with Express & Node.js
* 🗄️ MongoDB database integration
* ⚡ Fast frontend using React (Vite)
* 🐳 Fully Dockerized (Frontend + Backend + Database)

---

## 🏗️ Tech Stack

* **Frontend:** React (Vite), Nginx
* **Backend:** Node.js, Express
* **Database:** MongoDB
* **Containerization:** Docker, Docker Compose

---

## 📂 Project Structure

```
to-do-app/
│── backend/
│   ├── Dockerfile
│   ├── package.json
│   └── ...
│
│── frontend/
│   ├── Dockerfile
│   ├── vite.config.js
│   └── ...
│
│── docker-compose.yml
│── .dockerignore
│── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone <your-repo-url>
cd to-do-app
```

---

### 2️⃣ Run using Docker

```bash
docker-compose up --build
```

👉 Run in background:

```bash
docker-compose up -d
```

---

### 3️⃣ Access the app

* 🌐 Frontend: http://localhost
* 🔧 Backend API: http://localhost:5000
* 🗄️ MongoDB: localhost:27017

---

## 🛠️ Useful Commands

| Command                | Description              |
| ---------------------- | ------------------------ |
| `docker-compose up`    | Start containers         |
| `docker-compose up -d` | Start in background      |
| `docker-compose down`  | Stop containers          |
| `docker ps`            | Check running containers |
| `docker-compose logs`  | View logs                |

---

## ⚠️ Common Issues & Fixes

### ❌ Dockerfile not found

✔ Ensure file name is exactly `Dockerfile`

---

### ❌ Vite build error

✔ Use Node.js 20 in Dockerfile:

```dockerfile
FROM node:20
```

---

### ❌ API not connecting

✔ Use service name inside Docker:

```js
http://backend:5000/api
```

---

## 📸 Screenshots

*Add your app screenshots here*

---

## 🌍 Future Improvements

* 🔐 Authentication (JWT)
* ☁️ Deployment (AWS / Render / Railway)
* 📦 CI/CD pipeline
* 🎨 UI enhancements

---

## 🤝 Contributing

Feel free to fork this repo and contribute!

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Tausif Ansar**

---
