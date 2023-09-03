const express = require('express');
const { hostname } = require('os');
const path = require('path');

const app = express();
const port = 3000; // for example

// Serve static files (CSS and JavaScript)
app.use(express.static('public'));

app.get('/', (req, res) => {
    const filePath = path.join(__dirname, 'public', 'index.html');
    res.sendFile(filePath, (err) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

app.on('error', (err) => {
    console.error("Server error", err);
})
