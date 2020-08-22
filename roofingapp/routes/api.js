const express = require('express');

const router = express.Router();

const Customer = require('../models/customer')

router.get('/user', (req, res) => {
    Customer.find({})
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', error)
        });

});

router.post('/save', (req, res) => {
    console.log('Body: ', req.body);
    const data = req.body;

    const newCustomer = new Customer(data);
    newCustomer.save((error) => {
        if (error) {
            res.status(500).json({ msg: 'Sorry, internal server errors' });
           return;
        }
        return res.json({
            msg: 'Your data has been saved!!!'
        });

    });

    



});


module.exports = router;