import mongoose from 'mongoose';
const hallSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
        image:{
            type:String,
            required:true,
        },
        capacity:{
            type:String,
            required:true,
        },
        location:{
            type:String,
            required:true,
        },
        hallType:{
            type:String,
            required:true,
        },
        pricePerday:{
            type:String,
            required:true,
        },
        contactNumber:{
            type:String,
            required:true,
        },

    }
)

const Halls=mongoose.model("Halls",hallSchema);
export default Halls;