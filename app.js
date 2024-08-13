const express = require('express');
const data = require('./data/pfs.json');

const app = express();
const PORT = 8000;

app.get('/', (req, res) => {
    res.json(data);
});

app.listen(PORT, () => {
    console.log(`✅ Server is running on port ${PORT}`);
});

module.exports = app;
