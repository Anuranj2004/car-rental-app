const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
const connectDb = require('./config/db')

const authRoute = require('./routes/authRoutes')
const adminRoutes = require('./routes/adminRoutes')


dotenv.config();
connectDb();

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

app.use(cookieParser())


app.use(express.json())


app.use('/admin', adminRoutes);
app.use('/auth', authRoute);


const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server Running on the Port - ${PORT}`)
})




