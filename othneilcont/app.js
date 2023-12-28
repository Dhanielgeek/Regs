const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const cors = require('cors')

const router = require("./userRouter/userRoute")
const port = process.env.port


const app = express()
app.use(cors())
app.use(express.json())
app.use("/api/v1", router)

const db = process.env.dbLink
mongoose.connect(db)
.then(()=>{
    app.listen(port, ()=>{
        console.log(`server is listening on port:${port}`);
    })
    console.log("Database connection is established");
})
.catch((err)=>{
   console.log(err.message);
})