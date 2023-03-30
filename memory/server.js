const express = require('express');
const _ = require('lodash');

const app = express();
app.listen(5000);


app.get('/expressCheck', (req, res) => {
    console.log('Logger');
    res.send({ express: 'Test Passed'});
})