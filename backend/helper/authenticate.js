const joi = require("joi")


const validation = joi.object({
    fullName: joi.string().min(3).max(20),

    email: joi.string().email({
        minDomainSegments: 2, 
        tlds: { allow: ["com", "net", "ng"] },
    }),

    country:joi.string().min(3).max(20),

   address: joi.string().min(3).max(20),

   DOB: joi.string().min(3).max(30),

   state: joi.string().min(3).max(20), 
    
    phoneNumber: joi.string().pattern(new RegExp('^[0-9]')).min(5).max(11),

    password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]')).min(8),


     })


  module.exports = validation