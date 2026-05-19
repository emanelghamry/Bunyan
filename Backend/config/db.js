const mongoose=require("mongoose");
const ConnectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("DB is Connection ")
    }catch(error){
        console.log(error)
    }
    
}
module.exports=ConnectDB;