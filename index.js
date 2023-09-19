const express = require('express')
const getRoute = require("./routes/allroute")
const app = express()
app.use(express.json());
app.use('/bfhl', getRoute);


try {
    app.listen(5000)
} catch (error) {
    console.log(error)
}