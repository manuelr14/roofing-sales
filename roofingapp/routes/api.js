const express = require ('express');

const router = express.Router();

const Customer = require('../models/customer')

router.get('/api/user',(req,res)=>{
    Customer.find({ })
    .then((data) => {
        console.log ('Data: ', data);
        res.json(data);
    })
    .catch((error) => {
        console.log ('error: ' , error)
    });
   
 });

 module.exports = router;