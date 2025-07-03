
import express from 'express';
import userRoutes from './routes/userRoutes.js'
import morgan from 'morgan';
import mongoose from 'mongoose';
const app=express();
app.use(express.json());
app.use(morgan('dev'));

mongoose.connect("mongodb+srv://ankushchaudhary848:anshika1234@cluster0.acx0pdp.mongodb.net/").
then(()=>console.log("mongodb connected successfully")).
catch((err)=>console.log(err))

app.use('/',userRoutes)

app.listen(5000,()=>{
    console.log("server running on port 5000")
})