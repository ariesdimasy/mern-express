function countIncrement(req, res, next) {
  console.log("countIncrement");
  next();
}

module.exports = countIncrement;
