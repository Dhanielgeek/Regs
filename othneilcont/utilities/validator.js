const joi = require("joi")

const userValidate = joi.object({
fullName:joi.string().min(3).max(20),
phoneNumber:joi.string().pattern(new RegExp('^[0-9]')).min(11).max(11),
address:joi.string().min(3).max(12),
state:joi.string().min(3).max(10),
country:joi.string().min(3).max(10),
password:joi.string().min(3).max(10),
dateOfBirth: joi.string().pattern(new RegExp('^(?:\\d{4})-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])$')),
email:joi.string().email(),
})




module.exports =  {userValidate}
