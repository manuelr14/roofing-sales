const mongoose = require('mongoose');

// para empezar a crear el schema (tabla) acortamos mogoose.schema llamandolo solo schema
const Schema = mongoose.Schema;

//damos el nombre del schema, le definimos los parametros y lo creamos
const CustomerSchema = new Schema({
    name: String,
    lastname: String,
    phone: Number,
    street: String,
    city: String,
    zip: Number, 
    date:{
        type: String,
        default: Date.now()
    }
});

//creamos model llamado Customer 
const Customer = mongoose.model('Customer',CustomerSchema);

module.exports = Customer; 