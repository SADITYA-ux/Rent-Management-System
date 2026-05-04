const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

//Load apartment data from json file
function getApartments()
{
    const data = fs.readFileSync(path.join(__dirname, '../data/apartments.json'))
    return JSON.parse(data);
}

router.get( '/' , (req , res) => {
    const apartments = getApartments();
    res.json(apartments);
})

router.get( '/:id' , (req , res) => {
    const apartments = getApartments();
    const apartment = apartments.find(a => a.id === parseInt(req.params.id));

    if (!apartment)
    {
        return res.status(404).json({message : "Apartment not found"});
    }

    res.json(apartment);
})

router.delete( '/:id' , (req , res) =>
{
    let apartments = getApartments();

    const filtered = apartments.filter( a => a.id !== parseInt(req.params.id));

    fs.writeFileSync(
        path.join( __dirname , '../data/apartments.json'),
        JSON.stringify( filtered , null ,2)
    )

    res.json({ message : "Apartment is deleted"})
})

router.post( '/' , (req , res) => {
    const apartments = getApartments();

    const newApartment = 
    {
        id : apartments.length + 1,
        number: req.body.number,
        floor: req.body.floor,
        size: req.body.size,
        rent: req.body.rent,
        status: req.body.status
    }

    apartments.push(newApartment)
    
    fs.writeFileSync(
        path.join(__dirname, '../data/apartments.json'),
        JSON.stringify(apartments, null, 2)
    )
    
    res.status(201).json(newApartment)
})


module.exports = router;