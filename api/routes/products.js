var stripe = require('stripe')('sk_live_eAwrqxCKbCLwKpUFxUh9g4EE')
const express = require('express');
const router  = express.Router();

router.get('/', (req, res, next)=> {
    res.status(200).json({
        message: 'Handling GET requests to /products'
    })
});

router.post('/', (req, res, next)=> {

    let token = req.body;
    res.status(200).json({
        message: 'hello',
        token:token
    })

    // var stripetoken = req.body.stripetoken
    // var amountpayable = req.body.amount
    // var charge = stripe.charge.create({
    //     amount:amountpayable,
    //     currency:'usd',
    //     description: 'Sample transaction',
    //     source:stripetoken
    // }, function(err, charge) {
    //     if (err)
    //     console.log(err)
    //     else
    //     response.send({success: true})
    // })
    
});

module.exports = router;