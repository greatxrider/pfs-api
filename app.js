const express = require('express');
const data = require('./data/pfs.json');
const cors = require('cors');

const app = express();  // Initialize Express app

// Use CORS middleware
app.use(cors({
    origin: '*',  // Allow all origins
    methods: ['GET'],  // Allow specific HTTP methods
    allowedHeaders: ['Content-Type']  // Allow specific headers
}));

const PORT = 8000;

// Define route to serve JSON data
app.get('/', (req, res) => {
    res.json(data);
});

// Start the server
app.listen(PORT, () => {
    console.log(`✅ Server is running on port ${PORT}`);
});

module.exports = app;
