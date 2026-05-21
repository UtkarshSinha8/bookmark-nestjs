# Bookmark REST API

A structured backend application built with NestJS, TypeScript, and PostgreSQL. This application provides a secure REST API for managing users and bookmarks, incorporating JSON Web Token authentication and complete CRUD operations.

## Features

* User Authentication: Signup and login functionality with password hashing using Argon2.
* JWT Strategy: Secured endpoints using passport-jwt strategies and custom route guards.
* Bookmark CRUD: Full Create, Read, Update, and Delete operations for user specific bookmarks.
* Database Management: Object Relational Mapping handled via Prisma Client with PostgreSQL.
* Request Validation: Strict runtime data validation and transformation using class-validator.

## Prerequisites

Before setting up the project, ensure you have the following installed on your machine:

* Node.js (v18 or higher)
* npm or yarn
* PostgreSQL database instance
* Docker (Optional, for containerized database setup)

## Installation

Clone the repository and install the project dependencies:

```bash
git clone [https://github.com/UtkarshSinha8/-ai-chat-backend.git](https://github.com/UtkarshSinha8/-ai-chat-backend.git)
cd ai-chat-backend
npm install