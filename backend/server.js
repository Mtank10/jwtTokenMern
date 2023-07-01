import express from 'express';
import dotenv  from 'dotenv';
dotenv.config();
import cookieParser from 'cookie-parser';

import { notFound,errorHandler } from './middleware/errorMiddleware.js';
const port = process.env.PROT || 5000;

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

import connectDB from './config/db.js'
connectDB();
import userRoutes from './routes/userRoutes.js'
app.use('/api/users',userRoutes);

if(process.env.NODE_ENV==='production'){
    const _dirname =path.resolve();
    app.use(express.static(path.join(_dirname,'frontend/dist')))

    app.get('*',(req,res)=>res.sendFile(path.resolve(_dirname,'frontend','dist',
    'index.html')));
}else{
    app.get('/',(req,res)=>{
        res.send("server is ready");
    })
}

app.use(notFound);
app.use(errorHandler);
app.listen(port,()=>{
    console.log(`server started on port ${port}`)
})