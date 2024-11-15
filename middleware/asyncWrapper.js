module.exports = (asyncFu) => {
  return (req, res, next) => {
    asyncFu(req, res, next).catch((err) => {
      next(err)
    })
  }
}