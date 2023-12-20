import express from "express";
import { login, register } from "../controllers/userController.js";


const Userrouter = express.Router();


Userrouter.post("/register",register);

Userrouter.post("/login",login)
export default Userrouter
