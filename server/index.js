import cors from "cors"
import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"
import productRoute from "./routes/productRoutes.js"
import Userrouter from "./routes/userRoutes.js";

const app = express()
 
app.use(cors());
app.use(express.json());
dotenv.config()

app.use('/api',productRoute)
app.use('/user',Userrouter)

app.get('*', (res) =>{
    res.status(404).json("page Not Found")
})

const connect =(async(req,res)=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("mongodb connected");
    } catch (error) {
        console.log(error.message,"mongodb connection error");
    }
})
app.listen(process.env.PORT , () => {
    connect()
    console.log(`server running on PORT ${process.env.PORT}`);
})