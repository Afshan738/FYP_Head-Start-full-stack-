# Dynamic Admin-Controlled Portfolio

This repository contains the source code for a dynamic personal portfolio website. The primary goal is to create a website where all content—such as projects, skills, and education history—can be managed through a secure admin dashboard, eliminating the need to redeploy the application for simple content updates.

## Current Status

This project is in its very early stages of development. The current version only includes the foundational database setup.

### What's Included in this Initial Setup:

*   **Database Schema:** The complete SQL script (`database_schema.sql`) to create the PostgreSQL database structure. This includes the tables for:
    *   Projects
    *   Skills
    *   Education
    *   Certificates
    *   Admin Users
    *   Contact Messages
    *   And the relationships between them.

## The Vision & Technology Stack

The final application will be built using the following technologies:

*   **Backend:** Node.js, Express.js
*   **Frontend:** React.js
*   **Database:** PostgreSQL

## Project Roadmap

The next steps in the development process are:

1.  **Backend API Development:** Build a RESTful API with Node.js and Express to handle all Create, Read, Update, and Delete (CRUD) operations for the database content.
2.  **Admin Dashboard UI:** Create a secure frontend interface for the admin panel where content can be managed.
3.  **Public Portfolio UI:** Design and build the public-facing portfolio website that fetches and displays the content from the API.
4.  **Deployment:** Deploy the backend, frontend, and database to a live environment.

This README file will be updated as the project progresses.
