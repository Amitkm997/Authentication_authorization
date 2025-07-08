
import express from 'express';
import userRoutes from './routes/userRoutes.js'
import postRoutes from './routes/postRoute.js'
import morgan from 'morgan';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors'


dotenv.config();

const app=express();
app.use(cors())
app.use(express.json());
app.use(morgan('dev'));

mongoose.connect(process.env.MONGODB_URL).
then(()=>console.log("mongodb connected successfully")).
catch((err)=>console.log(err))

app.use('/',userRoutes)
app.use('/',postRoutes)

app.listen(5000,()=>{
    console.log("server running on port 5000")
})


//fileds
// name
// title 
// author 
// isAvailble 
// likes