const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080; 

app.use(morgan('tiny')); 

app.get('api/user',(req,res)=>{
    const data = {
        username: 'manuelr114',
        age: 32
    };
    res.json(data);
});

app.listen(PORT, console.log(`Server is starting in ${PORT}`))