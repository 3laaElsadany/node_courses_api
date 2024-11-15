const express = require("express");
const router = express.Router();
const courseController = require("../controllers/courses")
const {
  check
} = require("express-validator");
const userRoles = require("../utils/userRole")
const {
  validationSchema
} = require("../middleware/validationSchema");
const verifyToken = require("../middleware/varifyToken");
const varifyToken = require("../middleware/varifyToken");
const allowedTo = require("../middleware/allowedTo")

router.route("/")
  .get(courseController.getAllCourses)
  .post(verifyToken, allowedTo(userRoles.MANGER), validationSchema(), courseController.addCourse)

router.route("/:id")
  .get(courseController.getCourse)
  .patch(courseController.updateCourse)
  .delete(varifyToken, allowedTo(userRoles.ADMIN, userRoles.MANGER), courseController.deleteCourse)

module.exports = router;