const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema({
    fullName:{
        type: String,
        require: true
    },
    email: {
        type: String,
        unique: true,
        require: true
    },
    password:{
        type: String,
        required: true
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
        type: String,
        required: true
    },
    
    DOB:{
        type: String,
        required: true
    },
    phoneNumber:{
        type: String,
        required: true
    },
}, {timestamps: true})

const studentModel = mongoose.model("combineClass", studentSchema)
module.exports = studentModel