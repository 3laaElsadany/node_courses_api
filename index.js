const express = require("express");
const app = express();
const courseRouter = require("./routes/route")
const mongoose = require("mongoose");
require('dotenv').config()
const httpStatusText = require("./utils/httpStatusText")
const cors = require("cors");
const userRouter = require("./routes/user")
const path = require("path")


const url = process.env.MONGO_URL;

app.use(cors())

mongoose.connect(url)
  .then(() => console.log("Connected To DB"))
  .catch((err) => console.log(err))

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}))

app.use(express.static(path.join(__dirname, "uploads")))

app.use("/api/courses", courseRouter)
app.use("/api/users", userRouter)

app.all("*", (req, res, next) => {
  res.status(404).json({
    status: httpStatusText.ERROR,
    message: "This resourse is not available"
  })
})

app.use((error, req, res, next) => {
  res.status(error.statusCode || 500).json({
    status: error.statusText || httpStatusText.ERROR,
    message: error.message,
    code: error.statusCode || 500,
    data: null
  })
})

const port = process.env.PORT;
app.listen(port, () => {
  console.log("Server Running")
})