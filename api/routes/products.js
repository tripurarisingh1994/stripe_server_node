var stripe = require('stripe')('sk_live_eAwrqxCKbCLwKpUFxUh9g4EE')
const express = require('express');
const router  = express.Router();

router.get('/', (req, res, next)=> {
    res.status(200).json({
        message: 'Handling GET requests to /products'
    })
});

router.post('/', (req, res, next)=> {
   

    // var stripetoken = req.params.stripetoken
    // var amountpayable = req.params.amount

    res.status(200).json({
        message: req
        
    })
    

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