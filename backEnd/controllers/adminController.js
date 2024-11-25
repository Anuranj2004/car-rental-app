const { verify } = require('jsonwebtoken')
const userSchema = require('../model/userModel')
const carSchema = require('../model/rentalCarModel')
const nodemailer = require('nodemailer')
const multer = require('multer')
const bookingSchema = require('../model/bookingDetailsModel')
const messageSchema = require('../model/userMessageModel')

exports.allUserController = async (req, res) => {

    try {
        const users = await userSchema.find({})
        res.status(200).send({
            success: true,
            message: "Fetched All users",
            users,

        })

    } catch (err) {
        res.status(500).send({
            success: false,
            message: "Error in Fetching user details"
        })
    }


}

exports.adminLoginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        const adminEmail = 'rentaaradmin@gmail.com'
        const adminPassword = 'rentaaradmin'
        if (!email) {
            return res.status(500).send({
                success: false,
                message: "Email is Required"
            })
        }
        if (!password) {
            return res.status(500).send({
                success: false,
                message: "Password is Required"
            })
        }
        if (email !== adminEmail) {
            return res.status(404).send({
                success: false,
                message: "Invalid Admin"
            })
        }
        if (password !== adminPassword) {
            return res.status(404).send({
                success: false,
                message: "Incorrect Password"
            })
        }

        res.status(200).send({
            success: true,
            message: "Successfull Login As Admin",
            verify: true
        })

    } catch (err) {
        res.status(500).send({
            success: false,
            message: "Error in Login",
        })
    }
}

exports.addCarController = async (req, res) => {
    try {
        const { company, model, transmission, seat, fuelType, location, rent, landmark, features, imageUrl } = req.body;

        const car = new carSchema({
            company,
            model,
            transmission,
            seat,
            fuelType,
            location,
            rent,
            landmark,
            features,
            imageUrl
        })
        await car.save()
        res.status(200).send({
            success: true,
            message: "Car Added Successfully"
        })
    } catch (err) {
        res.status(500).send({
            success: false,
            message: "Error in adding Car Data",
            err
        })
    }
}

exports.carDetailsController = async (req, res) => {
    try {
        const cars = await carSchema.find({})
        if (cars) {
            //console.log("first")
            return res.status(200).send({
                success: true,
                message: "Details Fetched Successfully",
                cars
            })
        }
        else {
            return res.status(404).send({
                success: false,
                message: "Car Details Empty "
            })
        }

    } catch (err) {
        res.status(500).send({
            success: false,
            message: "Error in Fetching Data",
            err
        })
    }
}

exports.carRemovingController = async (req,res)=>{
    try{
        const {_id} = req.body;
        const removedCar = await carSchema.deleteOne({_id:_id})
        res.status(200).send({
            success:true,
            message:"Car Removed Successfully"
        })

    }catch(err){
        res.status(500).send({
            success:false,
            message:"Error In Removing Rental Car",
            err
        })
    }
}

exports.bookingDetails = async (req, res) => {
    try {
        const cars = await bookingSchema.find({})
        if (cars) {
            //console.log("first")
            return res.status(200).send({
                success: true,
                message: "Details Fetched Successfully",
                cars
            })
        }
        else {
            return res.status(404).send({
                success: false,
                message: "Car Details Empty "
            })
        }

    } catch (err) {
        res.status(500).send({
            success: false,
            message: "Error in Fetching Data",
            err
        })
    }
}

exports.messageFetchingController = async (req, res) => {
    try {
        const messages = await messageSchema.find({})
        if (messages) {
            //console.log("first")
            return res.status(200).send({
                success: true,
                message: "Details Fetched Successfully",
                messages
            })
        }
        else {
            return res.status(404).send({
                success: false,
                message: "Car Details Empty "
            })
        }

    } catch (err) {
        res.status(500).send({
            success: false,
            message: "Error in Fetching Data",
            err
        })
    }
}

exports.messageReplyController = async (req, res) => {
    try {
        const { message, reply } = req.body;
        if (!reply) {
            return res.status(404).send({
                success: false,
                message: "Reply Field is Empty"
            })
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            }
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: message.email,
            subject: `Reply for "${message.message}"`,
            text: `I appreciate you bringing up this concern,its important to address It
                
Here is the reply For Your Valuable Query,

    "${reply}"

    thank You,
        Team Rentaar
            
            `
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return res.status(400).send({
                    success: false,
                    message: 'Error in Sending Reply',
                    error
                })
            }
            else {
                res.status(200).send({
                    success: true,
                    message: 'Reply Sent Successfully'
                })
            }
        });




    } catch (err) {

    }
}