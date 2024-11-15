const appError = require("../utils/appError")
module.exports = (...roles) => {
  console.log(roles)
  return (req, res, next) => {
    if (!roles.includes(req.currentUser.role)) {
      next(appError.create("This role not autherized", 401))
    }
    next()
  }
}