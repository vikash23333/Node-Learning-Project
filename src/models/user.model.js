import mongoose, {Schema} from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new Schema({
    userName:{
        type:String,
        required:[true, "User Name is required"],
        unique:true,
        lowercase:true,
        trim:true,
        index:true
    },
    email:{
        type:String,
        required:[true, "Email is required"],
        unique:true,
        lowercase:true,
        trim:true,
    },
    fullName:{
        type:String,
        required:[true, "Full Name is required"],
        trim:true,
        index:true
    },
    avatar:{
        type:String,//Cloudnary service url
        required:[true, "Profile picture is required"],
    },
    coverImage:{
        type:String,//Cloudnary service url
    },
    watchHistory:[
        {
            type:Schema.Types.ObjectId,
            ref:"Video"
        }
    ],
    password:{
        type:String,//Cloudnary service url
        required:[true, "Password is required"],
    },
    refreshToken:{
        type:String
    }
},{timestamps:true});

//Password Encrypt middleware
userSchema.pre("save",async function (next){
    if (!this.isModified("password"))  return next();
    this.password=await bcrypt.hash(this.password, 10)
    next()
})
//Custom method design(for check password)
userSchema.methods.isPasswordCorrect=async function (password){
    return await bcrypt.compare(password, this.password)
}
userSchema.methods.generateAccessToken=function(){
    return jwt.sign({
        _id:this._id,
        email:this.email,
        fullName:this.fullName,
        userName:this.userName
    },
    process.env.ACCESS_TOKEN_SECRET,
    {expiresIn:process.env.ACCESS_TOKEN_EXPIRY}
    )
}
userSchema.methods.generateRefreshToken=function(){
    return jwt.sign({
        _id:this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
        expiresIn:process.env.REFRESH_TOKEN_EXPIRY
    })
}

export const User = mongoose.model("User",userSchema);