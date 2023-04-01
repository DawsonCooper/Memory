const express = require('express');
const _ = require('lodash');
const app = express();

const bodyParser = require('body-parser');



const User = require('./models/users')
const dbConnect = 'mongodb+srv://dawso:Allsnap36@memorygame.xppbh4e.mongodb.net/?retryWrites=true&w=majority'
const mongoose = require('mongoose');
mongoose.connect(dbConnect)
    .then(() => {app.listen(5000)})
    .catch(err => {console.log(err)});



app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());
app.get('/expressCheck', (req, res) => {
    console.log('Logger');
    res.send({ express: 'Test Passed'});
})

app.post('/register', (req, res) => {
    console.log('Register Push Received');
    const data = req.body;
    console.log(data)
});

app.post('/login', (req, res) => {
    console.log('Login Push Received');
    const data = req.body;
    console.log(data)
});