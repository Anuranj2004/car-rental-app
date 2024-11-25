const mongoose = require('mongoose')
const {Schema} = mongoose

const carSchema = new Schema({
    company:{
        type:String,
        required:true
    },
    model:{
        type:String,
        required:true
    },
    transmission:{
        type:String,
        required:true
    },
    seat:{
        type:Number,
        required:true
    },
    fuelType:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    rent:{
        type:Number,
        required:true
    },
    landmark:{
        type:String,
        required:true
    },
    features:{
        type:Array,
        required:true
    },
    imageUrl:{
        type:String,
        required:true
    },


},{timestamps:true}
)
module.exports = mongoose.model('cars',carSchema)