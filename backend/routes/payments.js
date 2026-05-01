const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// Placeholder for payments routes
function getPayments()
{
    const data = fs.readFileSync( path.join(__dirname, "../data/payments.json"));
    return JSON.parse(data);
}

router.get( '/' , (req , res) => 
{
    const payments = getPayments();
    res.json(payments);
})

router.get( '/:id' , (req , res) => {
    const payments = getPayments();
    const payment = payments.find( p => p.id === parseInt(req.params.id));

    if (!payment)
    {
        return res.status(404).json({ message : "Payment not found"})
    }
    
    res.json(payment);
})

router.post ( '/' , (req , res) => 
{
    const payments = getPayments();

    const newPayment =
    {
        id: payments.length + 1,
        name: req.body.name,
        amount: Number(req.body.amount),
        month: req.body.month,
        paidOn: req.body.paidOn,
        status: req.body.paymentStatus
    }

    payments.push(newPayment);

    fs.writeFileSync(
        path.join(__dirname, '../data/payments.json'),
        JSON.stringify(payments, null, 2)
    );

    res.status(201).json(newPayment);
})

module.exports = router;