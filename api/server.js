require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const PORT = 8080;

// Creating variable to configure WebService
const app = express();

// Enable CORS (Cross-Origin Resource Sharing) with credentials, allowing requests from http://localhost:8081
app.use(
  cors({
    origin: 'http://localhost:8081', //Frontend origin
    credentials: true,
  })
);

// Importing mongoose for database connection
const mongoose = require('mongoose');
// Connecting to the database using the URL from environment variables
mongoose.connect(process.env.DATABASE_URL);
// Storing the database connection instance
const db = mongoose.connection;

// Handling database connection errors
db.on('error', (error) => console.error(error));
// Once connected to the database, execute once
db.once('open', () => console.log('connected to DB'));

// Middleware to parse incoming request bodies as JSON
app.use(express.json());
// Middleware to parse cookies from incoming requests
app.use(cookieParser());

// Configure API endpoints and routes
const endpoints = [
  'user',
  'auth',
  'signOut',
  'searchUserName',
  'searchTweetContent',
  'follow',
  'unFollow',
  'followerList',
  'followingList',
  'team',
  'footballLeague',
  'tweet',
  'like',
  'comment',
  'likeComment',
  'deleteComment',
];

endpoints.forEach((endpoint) => {
  // URL is like localhost:8080/api/${endpoint}
  app.use(`/api/${endpoint}`, require(`./routes/${endpoint}`));
});

// Start WebService
app.listen(PORT, () => {
  console.log(
    `WebService is running on port ${PORT} | URL is: http://localhost:${PORT}/api/`
  );
});
