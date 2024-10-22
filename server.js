const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    console.log(Contact request from ${name}: ${message});
    res.send('Thank you for reaching out!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(Server running on port ${PORT}))