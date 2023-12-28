const express = require("express")
const mongoose = require("mongoose")
const router = require('./router/routers')
const cors = require('cors');


const dotenv = require('dotenv')
const app = express()


app.use(cors());
app.use(express.json());
// app.use(require("./router/routers"))
app.use(router)
dotenv.config()

const port = process.env.port
const dataBase = process.env.apiLink

mongoose.connect(dataBase).then(()=>{
    console.log(`database successfully connected`)

    app.listen(port, ()=> {
        console.log(`server is listening on port: ${port}`)
    })
}).catch((e)=>{
    console.log(e.message)
})

