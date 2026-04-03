<img width="1646" height="1398" alt="image" src="https://github.com/user-attachments/assets/0f4c5fa1-e1db-4253-975a-aa27cb3456a3" />Getting Started Todo App

This project is a sample Todo List application designed to showcase modern Docker best practices. It covers everything from writing an efficient Dockerfile, using Docker Compose, setting up CI with GitHub Actions, and running tests.

The goal is to provide a well-documented, easy-to-follow project so anyone can quickly understand and start working with Docker-based applications.

Application Architecture
<img width="958" height="772" alt="image" src="https://github.com/user-attachments/assets/0f3a2397-c88d-44e5-acc9-edaa4e69a9e1" />


This application consists of:

A React frontend
A Node.js backend

In production:

The frontend is built into static files (HTML, CSS, JS)
These files are bundled with the backend
The backend serves them as static assets
No server-side rendering is used

In development:

Frontend and backend run as separate services
Vite handles the React development environment
Nodemon enables live-reloading for the backend

This separation allows each service to use the best tools for development while staying fully containerized.

Development Setup
Prerequisites
Install Docker Desktop
Run the Application
git clone https://github.com/docker/getting-started-todo-app
cd getting-started-todo-app
docker compose up --watch

What happens next:

Required images are pulled from Docker Hub
Containers are built and started
The app becomes available shortly after
Access the App
Main app: http://localhost
Database UI (phpMyAdmin): http://db.localhost

Most modern browsers automatically resolve *.localhost, so no additional configuration is required.

Live Reloading
Changes to frontend or backend code are reflected instantly
No need to manually rebuild or restart containers
Stopping the Application

To stop and remove all running containers:

docker compose down
Key Highlights
Fully containerized development environment
No local dependency setup required
Instant feedback with live reload
Clear separation of frontend and backend
Demonstrates real-world Docker workflows
