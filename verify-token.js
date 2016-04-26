
module.exports = function (verifyToken) {
  return function (req, res, next) {
    if (req.params.token !== verifyToken) {
      return res.send(401, 'Unauthorized')
    }

    next()
  }
}
