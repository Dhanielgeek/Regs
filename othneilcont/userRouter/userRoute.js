const { createUser, logIn } = require('../userCont/cont')

const router = require('express').Router()

router.post("/createuser", createUser)
router.post("/loginuser", logIn)

module.exports = router

//https://localhost:3025/api/v1/createuser

//https://localhost:3025/api/v1/loginuser