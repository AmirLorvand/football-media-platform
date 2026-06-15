# Football Media Platform

This project is a full-stack football social-media style web application built with a JavaScript frontend and an Express/MongoDB backend.

The application includes user authentication, profiles, football-team selection, tweet-style posts, comments, likes, following/follower lists, search functionality, and football league/team-related pages.

---

## Project Timeline

- **Originally completed:** 2024
- **Refactored and published on GitHub:** 2026
- **Context:** University web application coursework project

This repository has been cleaned and documented for portfolio purposes.

---

## Project Status

This is a coursework project and should be viewed as an educational full-stack web application rather than a production-ready platform.

The original code has been cleaned for GitHub by removing local/private files, dependency folders, and environment secrets.

---

## Features

- Single-page frontend routing using JavaScript modules
- User sign-up and sign-in
- JWT-based authentication structure
- User profile page
- Change password page
- Search users and post content
- Create and display tweet-style posts
- Like and comment functionality
- Follow and unfollow users
- Followers and following pages
- Football team and league-related pages
- Settings and privacy pages
- Express backend API
- MongoDB database connection through Mongoose

---

## Technologies Used

### Frontend

- HTML
- CSS
- JavaScript ES modules
- Express static server

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT authentication
- bcryptjs
- cookie-parser
- CORS
- dotenv
- nodemon

### Testing

- Mocha
- Chai

---

## Project Structure

```text
.
├── index.html
├── index.js
├── app.js
├── package.json
├── package-lock.json
├── components/
├── assets/
├── validation/
├── test/
├── api/
│   ├── server.js
│   ├── package.json
│   ├── package-lock.json
│   ├── .env.example
│   ├── models/
│   └── routes/
├── .gitignore
└── README.md
```

---

## Environment Variables

The backend requires environment variables stored in:

```text
api/.env
```

A template is provided:

```text
api/.env.example
```

Create your own `api/.env` file locally using this format:

```env
DATABASE_URL="your_mongodb_connection_string"
SECRET_KEY="your_jwt_secret_key"
```

Do not commit the real `.env` file to GitHub.

---

## How to Run

This project has a frontend server and a backend API server.

### 1. Install frontend dependencies

From the root folder:

```bash
npm install
```

### 2. Install backend dependencies

```bash
cd api
npm install
```

### 3. Create backend environment file

Inside the `api/` folder, create:

```text
.env
```

Use the format shown in `.env.example`.

### 4. Start the backend API

From the `api/` folder:

```bash
npm run startApi
```

The backend runs on:

```text
http://localhost:8080/api/
```

### 5. Start the frontend

From the root folder:

```bash
npm start
```

The frontend runs on:

```text
http://localhost:8081
```

---

## Testing

Run the frontend validation tests from the root folder:

```bash
npm test
```

---

## What I Learned

Through this project, I practised:

- Building a multi-page web application using JavaScript modules
- Implementing frontend routing manually
- Connecting a frontend application to a backend API
- Creating REST-style Express routes
- Using MongoDB and Mongoose models
- Implementing authentication-related backend logic
- Managing users, posts, likes, comments, and follow relationships
- Structuring a larger web application for GitHub presentation
- Removing private files and environment secrets before publication

---

## Future Improvements

Possible improvements include:

- Refactoring repeated API URLs into a central configuration file
- Improving error handling and user feedback
- Adding stronger form validation
- Improving responsive design
- Adding more automated tests
- Replacing hard-coded localhost URLs with environment-based configuration
- Improving authentication security and token management
- Deploying the frontend and backend separately
- Adding screenshots and a demo video

---

## Author

**Amir Lorvand**

Computer Science graduate with an interest in software development, artificial intelligence, machine learning, full-stack development, and data-driven systems.
