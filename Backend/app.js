//Dotenv
require("dotenv").config()
//express
const express = require("express")
const app = express()
//middleware json
app.use(express.json());
//connenct db
const ConnectDB=require("./config/db")
ConnectDB()
//simple logger
if (process.env.NODE_ENV === "dev") {
    app.use((req, res, next) => {
        console.log(`${req.method} ${req.originallurl}`)
        next()
    })
}
// test route
app.get("/test",(req,res) =>{
    res.json({msg:"Test Route"})
})
//port
const port =process.env.PORT || 3000;


//run server
app.listen(port,()=>{
    console.log(`server is Running ${port}`)
}
)