const User = require("../model/user");

exports.getAllUserList = (req, res, next) => {
  const filter = {};
  const name = req.query ? req.query.name : null;
  if (name) {
    filter.name = name;
  }
  User.find({ ...filter })
    .then((users) => res.status(200).json(users))
    .catch((err) => res.status(500));
};
exports.getUser = (req, res, next) => {
  const userId = req.params.userId;
  User.findOne({ id: userId })
    .then((user) => res.status(200).json(user))
    .catch((err) => res.status(500));
};
exports.deleteUser = (req, res, next) => {
  const userId = req.params.userId;
  User.deleteOne({ id: userId })
    .then((user) => res.status(200).json(user))
    .catch((err) => res.status(500));
};
exports.addOrUpdateUser = (req, res, next) => {
  const userData = req.body.user;
  if (!!userData._id) {
    User.findByIdAndUpdate(userData._id, { ...userData })
      .then((user) => res.status(200).json(user))
      .catch((err) => res.status(500));
  } else {
    const user = User({ ...userData, id: `${Date.now()}` });
    user
      .save()
      .then((user) => res.status(201).json(user))
      .catch((err) => res.status(500));
  }
};
