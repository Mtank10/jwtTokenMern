import express from 'express';
import dotenv  from 'dotenv';
dotenv.config();
import { notFound,errorHandler } from './middleware/errorMiddleware.js';
const port = process.env.PROT || 5000;

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))

import connectDB from './config/db.js'
connectDB();
import userRoutes from './routes/userRoutes.js'
app.use('/api/users',userRoutes);

app.use(notFound);
app.use(errorHandler);
app.listen(port,()=>{
    console.log(`server started on port ${port}`)
})