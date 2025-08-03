# Dynamic Admin-Controlled Portfolio

This repository contains the source code for a dynamic personal portfolio website. The primary goal is to create a website where all content—such as projects, skills, and education history—can be managed through a secure admin dashboard, eliminating the need to redeploy the application for simple content updates.

## Current Status

The backend for this project is feature-complete and secure. All APIs and the core authentication system have been built and tested. The database is hosted on MongoDB Atlas. The next major phase is the development of the frontend.

### What's Complete:

*   **Database:** A NoSQL database is fully designed and hosted on **MongoDB Atlas**. All data schemas are defined using Mongoose.

*   **Backend API:** A RESTful API built with **Node.js** and **Express.js** is fully functional. It handles all Create, Read, Update, and Delete (CRUD) operations for the database content.

*   **Authentication & Authorization:** A complete, secure authentication system has been implemented:
    *   **Password Hashing:** Admin passwords are securely hashed using **bcrypt.js** before being stored in the database.
    *   **JWT Authentication:** A `POST /api/admin/login` endpoint validates credentials and issues a **JSON Web Token (JWT)**.
    *   **Route Protection:** A custom middleware protects all sensitive CUD (Create, Update, Delete) routes, requiring a valid JWT for access.

## The Vision & Technology Stack

The final application will be built using the **MERN stack** with a focus on security and modern practices:

*   **Backend:** Node.js, Express.js, JWT, bcrypt.js
*   **Frontend:** React.js
*   **Database:** MongoDB (hosted on MongoDB Atlas)

## Project Roadmap

The next steps in the development process are:

1.  **Frontend Development (In Progress):**
    *   **Public Portfolio UI:** Design and build the public-facing portfolio website that fetches and displays the content from the public API endpoints.
    *   **Admin Dashboard UI:** Create a secure frontend interface for the admin panel. This will include a login page and dashboards to manage all content using the protected APIs.
2.  **Deployment:** Deploy the backend and frontend to a live cloud environment.
3.  **(Future) CI/CD Pipeline:** Implement an automated pipeline using a tool like GitHub Actions to build, test, and deploy the application.

*This README file will be updated as the project progresses.*
