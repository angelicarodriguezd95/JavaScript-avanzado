const { Router } = require('express');
const express = require('express');
const mongoose= require('mongoose');
require ("dotenv").config();
const userRoutes= require ('./routes/user');


const app= express();
const port =  9000;

//middleware
app.use(express.json());
app.use('/api',userRoutes);


//rutes 
app.get('/',(req,res) => {
    res.send('welcome to my API'); 
});

console.log(process.env.MONGODB_URI);

//mongodb connection
mongoose.connect(process.env.MONGODB_URI)
.then(() =>console.log('connected to mongodb atlas'))
.catch((error) => console.error(error));

app.listen(port,()=>console.log('server listen on port ',port));