const mongoose = require('mongoose')
const {Schema} = mongoose

const bookingSchema = new Schema({
    email:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    booking:{
        type:Object,
        required:true
    },
    date:{
        type:Object,
        required:true,
    }
},{timestamps:true}
)
module.exports = mongoose.model('bookings',bookingSchema)