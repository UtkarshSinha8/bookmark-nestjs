# Bookmark REST API[cite: 1]

A structured backend application built with NestJS, TypeScript, and PostgreSQL. This application provides a secure REST API for managing users and bookmarks, incorporating JSON Web Token authentication and complete CRUD operations.[cite: 1]

## Features[cite: 1]

* User Authentication: Signup and login functionality with password hashing using Argon2.[cite: 1]
* JWT Strategy: Secured endpoints using passport-jwt strategies and custom route guards.[cite: 1]
* Bookmark CRUD: Full Create, Read, Update, and Delete operations for user specific bookmarks.[cite: 1]
* Database Management: Object Relational Mapping handled via Prisma Client with PostgreSQL.[cite: 1]
* Request Validation: Strict runtime data validation and transformation using class-validator.[cite: 1]

## Prerequisites[cite: 1]

Before setting up the project, ensure you have the following installed on your machine:[cite: 1]

* Node.js (v18 or higher)[cite: 1]
* npm or yarn[cite: 1]
* PostgreSQL database instance[cite: 1]
* Docker (Optional, for containerized database setup)[cite: 1]

## Installation[cite: 1]

Clone the repository and install the project dependencies:[cite: 1]

```bash
git clone [https://github.com/UtkarshSinha8/-ai-chat-backend.git](https://github.com/UtkarshSinha8/-ai-chat-backend.git)
cd ai-chat-backend
npm install
```[cite: 1]

## Environment Configuration[cite: 1]

Create a `.env` file in the root directory of the project. Copy the template from your `.env.example` file and fill in your local system values:[cite: 1]

```text
PORT=3000
DATABASE_URL="postgresql://db_user:db_password@localhost:5432/bookmark_db?schema=public"
JWT_SECRET="your_secure_jwt_secret_key_here"
JWT_EXPIRATION="1d"
```[cite: 1]

## Database Migration[cite: 1]

Run the Prisma migrations to initialize your database schema and generate the Prisma Client:[cite: 1]

```bash
npx prisma migrate dev --name init
```[cite: 1]

## Running the Application[cite: 1]

You can execute the NestJS server using the following npm scripts:[cite: 1]

```bash
# Development mode
npm run start

# Watch mode for auto reload
npm run start:dev

# Production mode
npm run start:prod
```[cite: 1]

## API Architecture and Endpoints[cite: 1]

All protected routes require a Bearer Token passed in the HTTP Authorization header: `Authorization: Bearer <your_jwt_token>`.[cite: 1]

### Authentication Module[cite: 1]

| HTTP Method | Endpoint | Access | Description |
| :--- | :--- | :--- | :--- |
| POST | /auth/signup | Public | Registers a new user account |
| POST | /auth/login | Public | Validates credentials and returns a JWT access token |[cite: 1]

### User Module[cite: 1]

| HTTP Method | Endpoint | Access | Description |
| :--- | :--- | :--- | :--- |
| GET | /users/me | Protected | Retrieves the profile details of the logged in user |[cite: 1]

### Bookmarks Module[cite: 1]

| HTTP Method | Endpoint | Access | Description |
| :--- | :--- | :--- | :--- |
| POST | /bookmarks | Protected | Creates a new bookmark for the authenticated user |
| GET | /bookmarks | Protected | Retrieves all bookmarks created by the authenticated user |
| GET | /bookmarks/:id | Protected | Retrieves a specific bookmark by its unique identifier |
| PATCH | /bookmarks/:id | Protected | Updates specific fields of an existing bookmark |
| DELETE | /bookmarks/:id | Protected | Removes a specific bookmark from the database |[cite: 1]

## Project Structure[cite: 1]

```text
src/
├── auth/
│   ├── dto/
│   ├── guard/
│   ├── strategy/
│   ├── auth.controller.ts
│   ├── auth.module.ts
│   └── auth.service.ts
├── bookmarks/
│   ├── dto/
│   ├── bookmarks.controller.ts
│   ├── bookmarks.module.ts
│   └── bookmarks.service.ts
├── prisma/
├── users/
├── app.module.ts
└── main.ts
```[cite: 1]

---

> **Note:** Ensure your database credentials in the local `.env` file match your active PostgreSQL instance before attempting to run migrations or seed data.[cite: 1]