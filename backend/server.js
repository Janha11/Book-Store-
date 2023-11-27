import  express, { request, response }  from "express";
import{PORT,mongoDBURL} from './config.js'
import mongoose from "mongoose";
import { Book } from "./model/bookModel.js";
import bookRoutes from'./model/bookRoutes.js'
import cors from 'cors';

const app=express()

app.use(express.json())
app.use(cors())

app.use('/books',bookRoutes)


app.get('/',(req,response)=>{
    console.log(req)
    return response.status(234).send('Http is set ')
})





mongoose
.connect(mongoDBURL)
.then(()=>{
console.log('Database connected')
app.listen(PORT,()=>{
    console.log(`App is Working in PORT ${PORT}`)
})
})
.catch((error)=>{
    console.log(error)
})
