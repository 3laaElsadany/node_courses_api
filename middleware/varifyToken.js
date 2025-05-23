const jwt = require("jsonwebtoken");
const httpStatusText = require("../utils/httpStatusText");
const appError = require("../utils/appError")

const varifyToken = (req, res, next) => {
  const authHeader = req.headers['Authorization'] || req.headers['authorization'];
  if (!authHeader) {
    const error = appError.create("token is required", 401, httpStatusText.ERROR)
    return next(error)
  }
  const token = authHeader.split(" ")[1];
  try {
    const decodedTohen = jwt.verify(token, process.env.JWT_SECRET_KEY);
    console.log('decodedTohen : ' + decodedTohen)
    req.currentUser = decodedTohen;
  } catch (err) {
    const error = appError.create("invalid token", 401, httpStatusText.ERROR)
    return next(error)
  }

  next()
}

module.exports = varifyToken;