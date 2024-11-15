const {
  check
} = require("express-validator");

const validationSchema = () => {
  return [
    check("title").not().isEmpty().withMessage("Enter The Title").isLength({
      min: 2
    }).withMessage("Min Length 2 Char"),
    check("price").notEmpty().withMessage("Enter The Price")
  ]
}

module.exports = {
  validationSchema
}