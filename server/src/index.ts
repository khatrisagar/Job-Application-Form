import express, {Request,Response, NextFunction} from 'express';
import dotenv from 'dotenv'
dotenv.config()
const app = express();
const router = express.Router()
const PORT  = process.env.PORT
import mysql2 from 'mysql2'
import conn from './config/dbConnetion'

app.use(express.json())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

import candidateRoutes from './routes/candidate.routes'
app.use('/',candidateRoutes)







app.listen(PORT, ():void =>{
    console.log(`Server Running on PORT: ${PORT}`)
})