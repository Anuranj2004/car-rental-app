const express = require('express')
const { allUserController,
    adminLoginController,
    addCarController,
    carDetailsController,
    bookingDetails,
    messageFetchingController,
    messageReplyController,
    carRemovingController } = require('../controllers/adminController')
    
const router = express.Router()

router.post('/userdetail', allUserController)
router.post('/admin-login', adminLoginController)
router.post('/addcar', addCarController)
router.get('/car-details', carDetailsController)
router.post('/remove-car', carRemovingController)
router.get('/all-booked-cars', bookingDetails)
router.get('/messages', messageFetchingController)
router.post('/message-reply', messageReplyController)

module.exports = router