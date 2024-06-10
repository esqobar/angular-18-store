const cors = require('cors')
const colors = require('colors')
const express = require('express')
const dotenv = require('dotenv').config()
const morgan = require('morgan')

const app = express()

app.use(express.json())
app.use(morgan('dev'))
app.use(cors({
    origin: '*'
}))

//routes
app.get('/', (req, res) => {
    res.send("Server is running...")
})

app.use('/api', require('./routes/checkout.route'))

const port = process.env.PORT
app.listen(port, () => {
    console.log(`Store 18 Server Runing  on localhost: ${port}`.america.bold.underline)
})