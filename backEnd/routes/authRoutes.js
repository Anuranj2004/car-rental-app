const express = require('express')
const { generateOtpController,
    registerController,
    loginController,
    resetOtpController,
    resetPasswordController,
    logoutController,
    carDetailsController,
    carBookingController,
    bookedCarsController,
    cancelBookingController,
    updateBookingDateController,
    userMessagesController } = require('../controllers/authController')
    
const { requiredSignIn } = require('../middlewares/authMiddlewares')
const router = express.Router()

router.post('/otp-generate', generateOtpController)
router.post('/register', registerController)
router.post('/login', loginController)
router.post('/otp-reset', resetOtpController)
router.post('/reset-passoword', resetPasswordController)
router.post('/user-message', requiredSignIn, userMessagesController)
router.post('/logout', logoutController)
router.get('/car-details', requiredSignIn, carDetailsController)
router.post('/booking', carBookingController)
router.post('/booked-cars', bookedCarsController)
router.post('/cancel-booking', cancelBookingController)
router.post('/update-booking-date', updateBookingDateController)

module.exports = router