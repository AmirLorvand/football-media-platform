import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
const PORT = 8081;

// Creating variable to configure Frontend server
const app = express();

// Get the directory path of the current file
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Serve static files from the root directory
app.use(express.static(path.join(__dirname, '')));

// Route for any other requests to serve the SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '', 'index.html'));
});

// Start the Frontend server
app.listen(PORT, () => {
  console.log(
    `Server is running on port ${PORT} | URL is: http://localhost:${PORT}`
  );
});
