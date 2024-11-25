const otpSchema = require('../model/otpModel')
const randomstring = require('randomstring')
const nodemailer = require('nodemailer')
const userSchema = require('../model/userModel')
const bookingSchema = require('../model/bookingDetailsModel')
const messageSchema = require('../model/userMessageModel')
const { hashValue, compareValue } = require('../helpers/hashValue')
const JWT = require('jsonwebtoken')

exports.generateOtpController = async (req, res) => {

    try {
        const { email } = req.body;

        if (!email) {
            return res.status(500).send({
                success: false,
                message: 'Email Required'
            })
        }

        const generateOtp = () => {
            return randomstring.generate({
                length: 6,
                charset: 'numeric'
            })
        }


        const newotp = await otpSchema.findOne({ email })
        //console.log(newotp)
        if (!newotp) {
            const otp = generateOtp();
            const newOtp = new otpSchema({
                email,
                otp
            })
            await newOtp.save();
        }
        else {
            newotp.otp = generateOtp()
            await newotp.save()
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
            to: newotp.email,
            subject: 'Otp Verification',
            text: `Your Otp for Verification is ${newotp.otp}`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return res.status(400).send({
                    success: false,
                    message: 'Error in Mailing Otp'
                })
            }
            else {
                res.status(200).send({
                    success: true,
                    message: 'Otp Sent Successfully'
                })
            }
        });




    } catch (err) {
        res.status(500).send({
            success: false,
            message: 'Error In Otp Verification',
            err
        })

    }
}

exports.registerController = async (req, res) => {
    try {
        const { name, email, otp, phone, password } = req.body
        if (!name) {
            return res.status(400).send('Name is Required')
        }
        if (!email) {
            return res.status(400).send('Email is Required')
        }
        if (!otp) {
            return res.status(400).send('Otp is Required')
        }
        if (!phone) {
            return res.status(400).send('Phone number is Required')
        }
        if (!password) {
            return res.status(400).send('Password is Required')
        }

        const otpVerify = await otpSchema.findOne({ email })
        if (otpVerify.otp !== otp) {
            return res.status(500).send({
                success: true,
                message: 'Otp is Invalid'
            })
        }

        const existingUser = await userSchema.findOne({ email })
        if (existingUser) {
            return res.status(400).send({
                success: false,
                message: 'User Already Exist with this Email'
            })
        }
        const hashedPassword = await hashValue(password)
        const user = new userSchema({
            name,
            email,
            password: hashedPassword,
            phone,
        })
        await user.save()

        res.status(200).send({
            success: true,
            message: 'Successfully Registered',
            name,
            email
        })

    } catch (err) {
        res.status(500).send({
            success: false,
            message: "Error In Registration",
            err
        })
    }

}

exports.loginController = async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email) {
            return res.send("Email is Required")
        }
        if (!password) {
            return res.send("Password is Required")
        }
        const user = await userSchema.findOne({ email })
        if (!user) {
            return res.status(404).send({
                success: false,
                message: "Email is Not Registered",
            })
        }

        const verify = await compareValue(password, user.password)

        if (!verify) {
            return res.status(404).send({
                success: false,
                message: "Incorrect Password"
            })
        }
        const token = JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "7d",
        })
        //console.log(token)
        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
            maxAge: 1000 * 60 * 60 * 24 * 7
        });


        res.status(200).send({
            success: true,
            message: "Login Successful",
            name: user.name,
            email: user.email,
            phone: user.phone
        })


    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Error in Login",
            error
        })
    }
}

exports.resetOtpController = async (req, res) => {
    try {
        const { email } = req.body;
        if (!email) {
            return res.send({
                success: false,
                message: 'Email is Required'
            })
        }
        const otpuser = await otpSchema.findOne({ email })
        if (!otpuser) {
            return res.status(404).send({
                success: false,
                message: "Email is Not Registered..Please Register First..!"
            })
        }

        const generateOtp = () => {
            return randomstring.generate({
                length: 6,
                charset: 'numeric'
            })
        }

        otpuser.otp = generateOtp()
        await otpuser.save()
        //console.log(otpuser)

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            }
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: otpuser.email,
            subject: 'Reset Password',
            text: `Your Otp for Password Reset is ${otpuser.otp}`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return res.status(400).send({
                    success: false,
                    message: 'Error in Mailing Otp'
                })
            }
            else {
                res.status(200).send({
                    success: true,
                    message: 'Otp Sent Successfully'
                })
            }
        });
    } catch (err) {
        res.status(500).send({
            success: false,
            message: 'Error in Otp Generation',
            err
        })
    }
}

exports.resetPasswordController = async (req, res) => {
    try {

        const { email, otp, password } = req.body;
        if (!email || !otp || !password) {
            return res.send({
                success: false,
                message: "All Field is required"
            })
        }
        const otpUser = await otpSchema.findOne({ email })

        if (otpUser.otp === otp) {
            const user = await userSchema.findOne({ email })
            if (user.password === password) {
                return res.status(404).send({
                    success: false,
                    message: "Previous and New Otp are Same"
                })
            }

            const hashedPassword = await hashValue(password)
            user.password = hashedPassword
            await user.save()

            return res.status(200).send({
                success: true,
                message: "PassWord Reset Successfull"

            })

        }
        else {
            return res.status(404).send({
                success: false,
                message: "InCorrect Otp"
            })
        }

    } catch (err) {
        res.status(500).send({
            success: false,
            message: "Error in Reset Password",
            err
        })
    }
}

exports.userMessagesController = async (req, res) => {
    try{
        const { name, email, phone, message } = req.body;
    if (!email || !name || !phone || !message) {
        res.status(404).send({
            success: false,
            message: "All Fields Are Required"
        })
    }
    const userMessage = new messageSchema ({
        name,
        email,
        phone,
        message
    })
    await userMessage.save()
    res.status(200).send({
        success:true,
        message:"Your Message Send Successfully"
    })
}catch(err){
    res.status(500).send({
        success:false,
        message:"Error in Sending Message",
        err
    })
}
}

exports.carDetailsController = async (req, res) => {
    res.status(200).send({
        success: true,
        message: "Car Details Page"
    })
}

exports.logoutController = async (req, res) => {

    res.clearCookie("token", {
        httpOnly: true,
        secure: false,
        sameSite: "lax"
    })

    res.status(200).send(
        {
            success: true,
            message: "Logout Successfull"
        }
    )
}

exports.carBookingController = async (req, res) => {
    try {
        const { email, name, phone, booking, date } = req.body;
        const book = new bookingSchema({
            email,
            name,
            phone,
            booking,
            date,
        })
        await book.save()
        res.status(200).send({
            success: true,
            message: "Car Booked Successfully Our Team will Contact You ASAP..:)"
        })

    } catch (err) {
        res.status(500).send({
            success: false,
            message: "Error in Booking",
            err
        })
    }
}

exports.bookedCarsController = async (req, res) => {
    try {
        const { email } = req.body;
        //console.log(email)
        const cars = await bookingSchema.find({ email })
        //console.log(cars)
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

exports.cancelBookingController = async (req, res) => {
    try {
        const { _id } = req.body;
        const deletedBooking = await bookingSchema.deleteOne({ _id: _id })
        res.status(200).send({
            success: true,
            message: "Booking Cancelled",
            deletedBooking
        })
    } catch (err) {
        res.status(500).send({
            success: false,
            message: "Error In Cancelling",
            err
        })
    }
}

exports.updateBookingDateController = async (req, res) => {
    try {
        const { _id, date } = req.body;
        console.log(_id)
        console.log(date)
        const bookingDetails = await bookingSchema.findOne({ _id });
        console.log(bookingDetails)
        if (bookingDetails.date === date) {
            res.status(404).send({
                success: false,
                message: "Date Is Same As the Previous"
            })
        }
        bookingDetails.date = date
        await bookingDetails.save()
        res.status(200).send({
            success: true,
            message: "Date Range Updated"
        })


    } catch (err) {
        res.status(500).send({
            success: false,
            message: "Error In Changing the Date Range",
            err
        })
    }
}

