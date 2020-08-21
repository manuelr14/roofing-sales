const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080; 

const routes = require('./routes/api');

// go to mongodb.atlas to create cluster, hit new cluster, give a name, cluster will create in 10 min
// database access, create user and password, give read and write access
// network access allow access from anywhere.
// go  back to cluster click conect and connect your app, copy the link, change password and db name 
//uncomment next line if i want to use the cluster 
// const MONGODB_URI = 'mongodb+srv://manuelr14:leaddatabase@cluster0-h1cps.mongodb.net/roofing_leads?retryWrites=true&w=majority'

//uncoment next line if i want to order to connect to the mongo cluster if not possible conncet to the local one 
//mongoose.connect (MONGODB_URI || 'mongodb://localhost/roofing_leads', {
    mongoose.connect ('mongodb://localhost/roofing_leads', {
    useNewUrlParser: true,
    useUnifiedTopology: true

});

// listener, will tell me if mongoose is connected
mongoose.connection.on('connected',() => {
    console.log('Mongoose is connected!!')
});
//make all the requests uncoded 
app.use(express.json());
app.use(express.urlencoded({ extended: true}));




// creando data cualquiera
// const data = {
//     name: 'Jessika',
//     lastname: 'Ramirez',
//     phone: 4045555555,
//     street: '847 parc river blvd',
//     city: 'lawrenceville',
//     zip: 30046
// };

// saving data to the mongo database usando .save y tiene un call back que me dice 
//si salvo la data o no

// const newCustomer = new Customer(data);
// newCustomer.save((error) => {
//     if (error) {
//         console.log( 'something happened');
//     }else {
//         console.log( 'data saved!');
//     }
// });

app.use(morgan('tiny')); 
app.use('/api', routes);



app.listen(PORT, console.log(`Server is starting in ${PORT}`))