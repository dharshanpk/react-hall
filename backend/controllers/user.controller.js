import User from '../models/user.model.js';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

export const postUser= async (req,res) => {
    
    try{
        const {username,email,phone,role,password,confirmPassword}=req.body;
    if(!username||!email||!phone||!role||!password||!confirmPassword){
        res.status(400).json({success:false,message:"Please fill all fields"})

    }
    
    
   
        const newUser=new User(
            {
                username,
                email,
                phone,
                role,
                password,
                confirmPassword
            });
        await newUser.save();
        res.status(201).json({success:true,message:"Db updated"})

    }catch(error){
        console.error("Error in creating Product");
        res.status(500).json({success:false,message:error.message})
    }

}

export const loginUser= async(req,res) => {
    
    try{
        const {email,password}=req.body;
        const user=await User.findOne({email}).select("+password");
        if(!user){
            return res.status(400).json({success:false,message:"User not found"});
        }

        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json({success:false,message:"Invalid Password"});
        } 

        res.json({
            success: true,
            message:"Login successfull",
            user:{
                id:user._id,
                email:user.email,
                role:user.role
            }
        })

    }catch(err){
        res.status(500).json({message:err.message});
    }
}
