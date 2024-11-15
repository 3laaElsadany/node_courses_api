const mongoose = require("mongoose");
const userRoles = require("../utils/userRole");
const validator = require("validator");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [validator.isEmail, 'field must be a valid email address']
  },
  password: {
    required: true,
    type: String
  },
  token: {
    type: String
  },
  role: {
    type: String,
    enum: [userRoles.ADMIN, userRoles.MANGER, userRoles.USER],
    default: userRoles.USER
  },
  avatar: {
    type: String,
    default: "img.jpg"
  }
})

const user = mongoose.model("User", userSchema);
module.exports = user;