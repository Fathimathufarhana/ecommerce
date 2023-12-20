import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";

import User from "../models/user.js";



export const register =async (req, res)=> {

    try {
      
      const { username, email, password} = req.body
      console.log(req.body);
      
      if (!username) {
    return res.status(400).json({ message: "username is required" });
  }
  
  
  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }
  
  
  if (!password) {
    return res.status(400).json({ message: "Password is required" });
  } else if (password.length < 8 || password.length > 16) {
    return res.status(400).json({ message: "Password must be between 8 and 16 characters" });
  }
  


  const saltRounds = 10;
  
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(password, salt);
  const newUser = new User({ username, email, password: hash});
  const savedUser = await newUser.save();
  res.status(200).json(savedUser);
  console.log(savedUser,"user");

    } catch (error) {
       console.log(error.message); 
    }
}


export const login = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      if (!email) {
        return res.status(400).json({ message: "Email is required" });
      }
  
      if (!password) {
        return res.status(400).json({ message: "Password is required" });
      } else if (password.length < 8 || password.length > 16) {
        return res.status(400).json({ message: "Password must be between 8 and 16 characters" });
      }
  
      const user = await User.findOne({ email: email });
  
      if (!user) {
        return res.status(404).json({ message: "User not found!" });
      }
  
      const isPassword = await bcrypt.compare(req.body.password, user.password);
  
      if (isPassword) {
        const token = jwt.sign({userId: user._id, username: user.username}, 'secretKey');
        res.json({result:user,token:token});
      } else {
        res.status(404).json({ message: "Incorrect password" });
      }
      
    } catch (error) {
      console.log(error);
    }
  };