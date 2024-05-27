import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

// export const signupUser = async(req,res) => {
//     try {
//         const {name, email, password,role} = await req.body;
//         const user = await User.findOne({email});
//         if(user){
//             return res.status(400).json({ message: "User already exists" });
//         }
//         const hashPassword = await bcryptjs.hash(password, 10);
//         const response = await User.create({name,email,password: hashPassword});
//         res.status(200).json({
//             message: "User created successfully",
//             success: true,
//             user: response
//         })
//     } catch (error) {
//         console.log(error)
//         res.status(500).json({
//             message: "Something went wrong",
//             success: false,
//             error: error
//         })
        
//     }
// }



export const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json({
      message: "Users fetched successfully",
      success: true,
      users: users,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Something went wrong",
      success: false,
      error: error,
    });
  }
};


export const signupUser = async (req, res) => {
  try {
    // Destructure request body
    const { name, email, password, role } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashPassword = await bcryptjs.hash(password, 10);
    const response = await User.create({ name, email, password: hashPassword });

    // Set a cookie upon successful signup
    // res.cookie("userId", response._id, { httpOnly: true });
    res.status(200).json({
      message: "User created successfully",
      success: true,
      user: response,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Something went wrong",
      success: false,
      error: error,
    });
  }
};


export const loginUser = async (req, res) => {
  try {
    const { email, password } = await req.body;
    const user = await User.findOne({ email });
    const isMatch = await bcryptjs.compare(password, user.password);
    if (!user || !isMatch) {
      return res.status(400).json({ message: "Invalid username or password" });
    }
    // Set a cookie upon successful login
    const token = jwt.sign({ email: user.email }, "jwt-secret", {
      expiresIn: "300",
    });
    // console.log(token)
    res.cookie("token", token);
    res.status(200).json({
      message: "User logged in successfully",
      success: true,
      user: user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "User Email Invalid Credentials",
      success: false,
      error: error,
    });
  }
};