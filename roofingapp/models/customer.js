const mongoose = require('mongoose');

// para empezar a crear el schema (tabla) acortamos mogoose.schema llamandolo solo schema
const Schema = mongoose.Schema;

//damos el nombre del schema, le definimos los parametros y lo creamos
const CustomerSchema = new Schema({
    name1: String,
    lastname1: String,
    phone1: Number,
    email1: String,
    dob1:String,
    name2: String,
    lastname2: String,
    phone2: Number,
    email2: String,
    dob2: String,
    street: String,
    city: String,
    state: String,
    zip: String,
    stories: String,
    inscomp: String,
    policynum: String,
    topolicy: String,
    deductible: Number,
    date:{
        type: String,
        default: Date.now()
    }
});

//creamos model llamado Customer 
const Customer = mongoose.model('Customer',CustomerSchema);

module.exports = Customer; 