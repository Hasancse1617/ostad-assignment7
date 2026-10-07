const express = require('express');
const path = require('path');

const app = express();

// Serve the index.html on the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// TODO: Add more API routes here later

// Handle 404
app.use((req, res) => {
    res.status(404).send('Not Found');
});

module.exports = app;
