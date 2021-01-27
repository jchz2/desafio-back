const Posts = require("./../models/posts");

function getAll() {
  return Posts.find({});
}

function getById() {}

module.exports = {
  getAll,
  getById,
};
