const mongoose = require("mongoose"),
  userSchema = mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    address: String,
  });

module.exports = mongoose.model("User", userSchema);
