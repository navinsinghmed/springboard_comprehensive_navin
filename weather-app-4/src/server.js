const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3500;

app.get('^/$|/App.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'App.js'));
});

//establish token via cors
app.use(cors());

app.use('/login', (req, res) => {
    res.send({
        token: 'test123'
    });
});


app.get('/*', (req, res) => {
    res.status(path.join(__dirname, 'client', '404.html'))
});

//use built in middleware for urlendcoded data and form data
app.use(express.urlencoded({ extended: false }));

//use built-in middleware for json
app.use(express.json());

//serve static files
app.use(express.static(path.join(__dirname, '/public')));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
app.listen(8080, () => console.log('API is running on http://localhost:8080/login'));