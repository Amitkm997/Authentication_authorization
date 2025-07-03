
import User from "../models/userModel.js";
import bcrypt from 'bcrypt';

let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name) return res.send("Please enter your name");
  if (!email) return res.send("Please enter your email");
  if (!password) return res.send("Please enter your password");

  if (!emailRegex.test(email)) return res.send("Invalid email");

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
