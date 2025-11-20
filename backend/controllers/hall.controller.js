import mongoose from 'mongoose';
import Halls from '../models/hall.model.js';
import {v2 as cloudinary} from 'cloudinary';


export const postHallDetails= async(req,res) => {
    try{
        console.log("Body:",req.body);
        console.log("File:",req.file);

    const {name,capacity,location,hallType,pricePerday,contactNumber}=req.body;
    const image1=req.file;
   // if(!name||!capacity||!location || !hallType||!pricePerday||!contactNumber){
       // return res.status(400).json({success:false,message:"Please provide all fields"});
   // }
    //if(!req.files.image){
       // return res.status(400).json({success:false,message:"image file missing"})

 //}
    let result=await cloudinary.uploader.upload(req.file.path,{resource_type:'image'});
    const imageUrl=result.secure_url;
    console.log(imageUrl);
    console.log(name);
    console.log(image1);
    
    const hallDetail= new Halls({
        name,
        capacity: Number(capacity),
        location,
        hallType,
        pricePerday: Number(pricePerday),
        contactNumber: Number(contactNumber),
        image: imageUrl
        
    })

    await hallDetail.save()

    res.json({success: true,message:"Product Added"})
}catch(error){
        console.log(error);
        res.json({success:false,message:error.message})

    }
}
         // Cloudinary already gives URL here

    
        

export const getHallDetails= async(req,res) => {
    try{
        const halls=await Halls.find({})
        if(!halls || halls.length === 0) {
            return res.status(404).json({success:false,message:"No hall details found"});

        }
        return res.status(201).json({
            success:true, 
            halls: halls.map(hall => ({
            id:hall._id,
            image:hall.image,
            name:hall.name,
            capacity:hall.capacity,
            location:hall.location,
            pricePerDay:hall.pricePerday,
            contactNumber:hall.contactNumber,
            hallType:hall.hallType

        }))

    });
   }catch(error){
        return res.status(500).json({message:"Server error : ${error.message}"})
    }
}