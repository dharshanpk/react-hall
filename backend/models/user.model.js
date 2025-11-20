import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
const userSchema=new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
        
        },

        email: {
            type: String,
            required: true,
            unique: true,
            match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"]
        },

        phone: {
            type: String,
            required: true,
            unique: true,
        },

        role: {
            type: String,
            enum: ["Admin","Customer"],
            default: "Customer",
            required: true
        },
        password: {
            type: String,
            required: [true, "Password is required"],
            minlength: [6, "Password must be at least 6 characters long"],
            select: false

        },



    });
userSchema.virtual("confirmPassword")
    .set(function(value){
        this._confirmPassword=value;
    })
    .get(function(){
        return this._confirmPassword;
    });
userSchema.pre("save",function(next){
    if(this.password!==this._confirmPassword){
        return next(new Error("Passwords do not match"));
    }
    next();
});
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});
    

    const User=mongoose.model("User",userSchema);
    export default User;
