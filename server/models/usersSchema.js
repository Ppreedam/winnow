import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    imgpath:{
        type:String,
        required:true
    },
    date:{
        type:Date
    }
});


// create model

const users = new mongoose.model("productData",userSchema);

export default users

