const mongoose = require("mongoose");

const Todo = mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Todo", Todo);
