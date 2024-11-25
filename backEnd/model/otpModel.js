const mongoose = require('mongoose')
const {Schema} = mongoose

const otpSchema = new Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    otp:{
        type:String,
        required:true
    }
},{timestamps:true}
)
module.exports = mongoose.model('otps',otpSchema)