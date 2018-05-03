var stripe = require('stripe')('sk_live_eAwrqxCKbCLwKpUFxUh9g4EE')
const express = require('express');
const router  = express.Router();

router.get('/', (req, res, next)=> {
    res.status(200).json({
        message: 'Handling GET requests to /products'
    })
});

router.post('/', (req, res, next)=> {

    var stripetoken = req.body.stripetoken
    var amountpayable = req.body.amount

    res.status(200).json({
        message: 'hello',
        token:stripetoken,
        amountpayable:amountpayable
    })

    var charge = stripe.charges.create({
        amount:amountpayable,
        currency:'gpb',
        description: 'Sample transaction',
        source:stripetoken
    }, function(err, charge) {
        if (err)
        console.log(err)
        else
        res.send({success: true})
    })
    
});

module.exports = router;