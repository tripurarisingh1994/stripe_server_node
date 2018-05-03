var stripe = require('stripe')('sk_test_KpYE4tTGNHCAicsQMSZeMJhP')
const express = require('express');
const router  = express.Router();

router.get('/', (req, res, next)=> {
    res.status(200).json({
        message: 'Handling GET requests to /products'
    })
});

router.post('/', (req, res, next)=> {

    // var stripetoken = req.body.stripetoken
    // var amountpayable = req.body.amount

    // res.send({token: stripetoken, amount: amountpayable})

    res.status(200).json( {
        // token:stripetoken,
        // amount: amountpayable 
        req:req
    })
    // stripe.charges.create({
    //     amount:amountpayable,
    //     currency:'usd',
    //     description: 'Sample transaction',
    //     source:stripetoken
    // }, function(err, charge) {
    //     if (err)
    //     res.send({error: err})
    //     else
    //     res.send({success: true})
    // })
    
});

module.exports = router;