module.exports = {
  userOnly: (req, res, next) => {
    if (!req.session.user) {
      return res.status(401).send("Please log in");
    }
    next();
  }
};
