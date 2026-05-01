const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// Placeholder for staff routes
function getStaff()
{
    const data = fs.readFileSync( path.join(__dirname, "../data/staff.json"));
    return JSON.parse(data);
}

router.get( '/' , (req , res) => 
{
    const staff = getStaff();
    res.json(staff);
})

router.get( '/:id' , (req , res) => {
    const staff = getStaff();
    const employee = staff.find( s => s.id === parseInt(req.params.id));

    if (!employee)
    {
        return res.status(404).json({ message : "Staff member not found"})
    }
    
    res.json(employee);
})

router.post ( '/' , (req , res) => 
{
    const staff = getStaff();

    const newEmployee = {
        id : staff.length + 1,
        name : req.body.name,
        phone : req.body.phone,
        salary : req.body.salary,
        position : req.body.position,
        age : req.body.age
    };

    staff.push(newEmployee);

    fs.writeFileSync(
        path.join(__dirname, '../data/staff.json'),
        JSON.stringify(staff, null, 2)
    );

    res.status(201).json(newEmployee);
})

module.exports = router;