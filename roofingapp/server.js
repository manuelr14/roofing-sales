const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080; 

const MONGODB_URI = 'mongodb+srv://manuelr14:leaddatabase@cluster0-h1cps.mongodb.net/<dbname>?retryWrites=true&w=majority'
mongoose.connect (MONGODB_URI || 'mongodb://localhost/roofing_leads', {
    useNewUrlParser: true,
    useUnifiedTopology: true

});

// leaddatabase
mongoose.connection.on('connected',() => {
    console.log('Mongoose is connected!!')
});


app.use(morgan('tiny')); 

app.get('/api/user',(req,res)=>{
    const data = {
        username: 'manuelr14',
        age: 32
    };
    res.json(data);
});

app.listen(PORT, console.log(`Server is starting in ${PORT}`))