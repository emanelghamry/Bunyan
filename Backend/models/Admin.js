const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const { string } = require("joi")
const adminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required"],

    },
    email: {
        type: String,
        required: [true, "Email is required"],
    },
    passwored: {
        type: String,
        required: [true, "Email is required"],
        minlength: 6,

    }
}, { timestamps: true })
adminSchema.pre("save", async function (next) {
    if (!this.isModified("passwored")) return next();
    this.passwored=await bcrypt.hash(this.passwored,10);


});
adminSchema.methods.comparePasswored=async function (matchedPasswored) {
    return await bcrypt.compare(matchedPasswored,this.passwored)
    
}
const Admin =mongoose.model("Admin",adminSchema)
module.exports=Admin