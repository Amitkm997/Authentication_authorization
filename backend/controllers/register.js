
import e from "express";
import User from "../models/userModel.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'

// let emailRegex = /^[^\s@[^\s@]+\.[^\s@]+$/;

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name) return res.send("Please enter your name");
  if (!email) return res.send("Please enter your email");
  if (!password) return res.send("Please enter your password");

  // if (!emailRegex.test(email)) return res.send("Invalid email");

  let existUser = await User.findOne({ email });
  if (existUser) return res.send("Email already exists. You can directly login.");

  let hashedPassword = await bcrypt.hash(password, 10);

  let newUser = new User({
    name,
    email,
    password: hashedPassword
  });

  await newUser.save();
  res.send({ message: "User registered successfully", newUser });
};

export const login=async(req,res)=>{
     const {email,password}=req.body;
     if(!email) return res.status(400).send({message:"Email not provided"});
     if(!password) return res.status(400).send({message:"Please provide password"});
     
     let exitstUser=await User.findOne({email});
     if(!exitstUser) res.status(404).send({message:"user not registered"})
     
     let comparedPassword=await bcrypt.compare(password,exitstUser.password);
     if(!comparedPassword) return res.status(401).send({message:"invalid password"});
     
     const payload={id:exitstUser._id,email:email}
     const token=jwt.sign(payload,"This is my secret key",{expiresIn:"1h"});

     res.status(200).send({message:"token created successfully",token:token})
}
