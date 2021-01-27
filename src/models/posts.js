const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 100,
    trim: true,
    require: true,
  },
  tags: {
    type: String,
    minlength: 2,
    maxlength: 100,
    require: true,
  },
  image: {
    type: String,
    minlength: 2,
    maxlength: 100,
    require: false,
  },
  postContent: {
    type: String,
    minlength: 2,
    maxlength: 1000,
    require: true,
  },
});

const model = mongoose.model("posts", schema);

module.exports = model;
