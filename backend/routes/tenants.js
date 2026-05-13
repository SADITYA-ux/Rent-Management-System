const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

//Placeholder for tenants routes
function gettenants()
{
    const data = fs.readFileSync( path.join(__dirname, "../data/tenants.json"));
    return JSON.parse(data);
}

//Placeholder for apartment routes
function getApartments()
{
    const Adata = fs.readFileSync( path.join( __dirname , "../data/apartments.json"));
    return JSON.parse(Adata);
}

router.get( '/' , (req , res) =>
{
    const tenants = gettenants();
    res.json(tenants);
})

router.get( '/:id' , (req , res) => {
    const tenants = gettenants();
    const tenant = tenants.find( t => t.id === parseInt(req.params.id)); 

    if (!tenant)
    {
        return res.status(404).json({ message : "tenant not found"})
    }

    res.json(tenant);
})

router.delete( '/:id' , (req , res) =>
{
    let tenants = gettenants();

    const filtered = tenants.filter( t => t.id !== parseInt(req.params.id));

    fs.writeFileSync(
        path.join( __dirname , '../data/tenants.json'),
        JSON.stringify( filtered , null ,2)
    )

    res.json({ message : "tenant deleted"})
})

router.post( '/' , (req , res) => {
    const tenants = gettenants();
    const apartments = getApartments();
    const Index = apartments.findIndex( a => a.number === req.body.apartmentId);

    const newTenant = {
        id: tenants.length + 1,
        name: req.body.name,
        phone: req.body.phone,
        apartmentId: req.body.apartmentId,
        rent: Number(req.body.rent),
        leaseStart: req.body.leaseStart,
        leaseEnd: req.body.leaseEnd,
    };

    tenants.push(newTenant)

    if (Index !== -1) {
        apartments[Index].status = "occupied"
        fs.writeFileSync(
            path.join(__dirname, "../data/apartments.json"),
            JSON.stringify(apartments, null, 2)
        )
    }
    
    fs.writeFileSync(
        path.join(__dirname, '../data/tenants.json'),
        JSON.stringify(tenants, null, 2)
    )
    
    res.status(201).json(newTenant)
})

module.exports = router;