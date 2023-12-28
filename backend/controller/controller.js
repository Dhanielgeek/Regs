const userModel = require("../model/model")
const axios = require('axios')
const bcrypt = require('bcryptjs') 
const jwt = require("jsonwebtoken")
const validation= require("../helper/authenticate")

exports.home =  (req, res)=> {
    res.send("welcome")
}

exports.register = async (req, res) => {
    try {
        const {fullName, email, password, country, address, phoneNumber, state, DOB} = req.body
        const checkAvailability = await userModel.findOne({email})

        if (checkAvailability) {
            return res.status(400).json({
                message: `user with this email already exists`
            })
        }
        await validation.validateAsync(req.body)

        const salt = bcrypt.genSaltSync(12)
        const hash = bcrypt.hashSync(password, salt)

        const user = await userModel.create({fullName, email, country, address, phoneNumber, state, DOB, password:hash})
        await user.save()

        res.status(201).json({
            message: `User successfully created`,
            user
        })
    } catch (error) {
        res.status(500).json(error.message)
    }
}

exports.login = async (req, res) => {
    try {
        const {detail, password} = req.body;
        
        const user = await userModel.findOne({
            $or: [{email: detail}, {phoneNumber: detail}]
        })

        if (!user) {
            return res.status(404).json({
                message: `User not found`
            })
        }

        const checkpass = bcrypt.compareSync(password, user.password)
        if (!checkpass) {
            return res.status(404).json({
                message: `invalid password`
            })
        }

        const token = jwt.sign({
            userId: user._id,
            email: user.email,
        }, process.env.jsonSecret, {expiresIn: "1d"})

        res.status(200).json({
            message: `Login Successful`,
            token,
            user
        })
    } catch (error) {
        res.status(500).json(error.message)
    }
}

