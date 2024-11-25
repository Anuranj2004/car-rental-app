const mongoose = require('mongoose')
const connectDb = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URL)
        console.log('Db Connected')
    } catch (err) {
        console.log(err)
        console.log('Db Failed to connect')
    }
}
module.exports = connectDb