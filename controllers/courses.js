const {
  validationResult
} = require("express-validator");
const Course = require("../models/course.model");
const httpStatusText = require("../utils/httpStatusText");
const asyncWrapper = require("../middleware/asyncWrapper");
const appError = require("../utils/appError.js")

const getAllCourses = asyncWrapper(async (req, res) => {
  const query = req.query;
  const limit = query.limit || 2;
  const page = query.page || 3;
  const skip = (page - 1) * limit;
  const courses = await Course.find({}, {
    "__v": 0
  }).limit(limit).skip(skip)
  res.json({
    status: httpStatusText.SUCCESS,
    data: {
      courses
    }
  })
})

const getCourse = asyncWrapper(async (req, res, next) => {
  let course = await Course.findById(req.params.id);
  if (!course) {
    const error = appError.create("course not found", 404, httpStatusText.FAIL)
    return next(error);
  }
  res.json({
    status: httpStatusText.SUCCESS,
    data: {
      course
    }
  })
})

const addCourse = asyncWrapper(async (req, res, next) => {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = appError.create(errors.array(), 400, httpStatusText.FAIL)
    return next(error)
  }

  const newCourse = new Course(req.body)
  await newCourse.save()
  res.json({
    status: httpStatusText.SUCCESS,
    data: {
      course: newCourse
    }
  });
})

const updateCourse = asyncWrapper(async (req, res) => {
  let updatedCourse = await Course.updateOne({
    _id: req.params.id
  }, {
    $set: {
      ...req.body
    }
  })
  return res.json({
    status: httpStatusText.SUCCESS,
    data: {
      course: updatedCourse
    }
  })
})

const deleteCourse = asyncWrapper(async (req, res) => {
  const result = await Course.deleteOne({
    _id: req.params.id
  });
  res.json({
    status: httpStatusText.SUCCESS,
    data: null
  });
});

module.exports = {
  getAllCourses,
  getCourse,
  addCourse,
  updateCourse,
  deleteCourse
}