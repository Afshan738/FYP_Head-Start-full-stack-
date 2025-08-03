# Dynamic Admin-Controlled Portfolio

This repository contains the source code for a dynamic personal portfolio website. The primary goal is to create a website where all content—such as projects, skills, and education history—can be managed through a secure admin dashboard, eliminating the need to redeploy the application for simple content updates.

## Current Status

The backend for this project is largely complete. All the necessary APIs for managing content have been built and tested. The database is hosted on MongoDB Atlas. The next major phase is the development of the frontend.

### What's Complete:

*   **Database:** A NoSQL database is fully designed and hosted on **MongoDB Atlas**. The schemas for all data collections are defined using Mongoose. This includes collections for:
    *   Projects
    *   Skills
    *   Education
    *   Certificates
    *   Admin Users
    *   Contact Messages
    *   Site Content

*   **Backend API:** A RESTful API built with **Node.js** and **Express.js** is fully functional. It handles all Create, Read, Update, and Delete (CRUD) operations for the database content and has been tested with Postman.

## The Vision & Technology Stack

The final application will be built using the **MERN stack**:

*   **Backend:** Node.js, Express.js
*   **Frontend:** React.js
*   **Database:** MongoDB (hosted on MongoDB Atlas)

## Project Roadmap

The next steps in the development process are:

1.  **Frontend Development (In Progress):**
    *   **Public Portfolio UI:** Design and build the public-facing portfolio website that fetches and displays the content from the API.
    *   **Admin Dashboard UI:** Create a secure frontend interface for the admin panel where content can be managed using the existing APIs.
2.  **Authentication:** Implement JWT (JSON Web Token) authentication for the admin login and secure the API endpoints.
3.  **Deployment:** Deploy the backend and frontend to a live cloud environment.

*This README file will be updated as the project progresses.
