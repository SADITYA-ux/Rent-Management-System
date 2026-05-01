const express = require ('express');
const app = express();
const cors = require('cors')

app.use(cors());
app.use(express.json());


const apartmentsRouter = require( "./routes/apartments");
const tenantsRouter = require( "./routes/tenants");
const paymentsRouter = require( "./routes/payments");
const staffRouter = require( "./routes/staff");

app.use("/payments" , paymentsRouter);
app.use("/tenants" ,tenantsRouter)
app.use("/apartments" , apartmentsRouter);
app.use("/staff" , staffRouter);


app.get( '/' , (req , res) => 
{
    res.send('Rent-Managment System');
})

app.listen( 5000 , () =>
{
    console.log("Server is running on port 5000");
})

