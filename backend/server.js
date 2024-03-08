require('dotenv').config()
const express = require('express')
const cors = require('cors')

const app = express()
app.use(express.json())
const corsOptions ={
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, PATCH, HEAD",
    credentials: true
}
app.use(cors(corsOptions))

const authRoutes = require('./router/auth-router')
const contactRoute = require('./router/contact-router')
const connectDb = require('./utils/db')
const errorMiddleware = require('./middlewares/error_handlers')


app.use('/api/auth' , authRoutes)
app.use('/api/form' , contactRoute)
// using error_handle middlewares

app.use(errorMiddleware)

const port = 3000

connectDb().then(() => {
    app.listen(port, () => {
        console.log(`server is runnning at port : ${port}`)
    })
})
