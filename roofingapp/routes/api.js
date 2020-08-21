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
    console.log('Body: ', req.body)

    res.json({
        msg: 'we reveived your data!!'
    });



});
   

module.exports = router;