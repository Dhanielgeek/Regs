const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    fullName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    address:{
        type: String,
        required: true
    },
    state:{
        type: String,
        required: true
    },
    country:{
        type: String
    },
    dateOfBirth:{
        type: String
    },
    phoneNumber:{
        type:String
    },
     password:{
        type:String
    },
    token:{
        type:String
    }
},{timestamp:true})

const userModel = mongoose.model("userMod", userSchema)

module.exports = userModel