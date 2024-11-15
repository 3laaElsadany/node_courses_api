const express = require("express");
const router = express.Router();
const usersController = require("../controllers/user")
const varifyToken = require("../middleware/varifyToken")
const multer = require('multer')
const appError = require("../utils/appError")

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    cb(null, `user-${Date.now()}-` + file.originalname)
  }
})

const fileFilter = function (req, file, cb) {
  const imageType = file.mimetype.split("/")[0];
  if (imageType === "image") {
    cb(null, true)
  } else {
    cb(appError.create("file must be an image", 400), false)
  }
}



const upload = multer({
  storage: storage,
  fileFilter
})

router.route("/")
  .get(varifyToken, usersController.getAllUsers)

router.route("/register")
  .post(upload.single('avatar'), usersController.register)

router.route("/login")
  .post(usersController.login)

module.exports = router;