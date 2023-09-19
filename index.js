const express = require('express')
const getRoute = require("./routes/allroute")
const dotenv = require('dotenv')
const cors = require('cors')
const app = express()
dotenv.config()
app.use(express.json());
app.use('/bfhl', getRoute);


app.listen(process.env.PORT, () => {
    console.log(`Server connected AT ${process.env.PORT}`)
})