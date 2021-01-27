const express = require("express");
const posts = require("./../usecases/posts");
const authMiddleware = require("../middlewares/auth");

const router = express.Router();

router.get("/", authMiddleware, async (request, response) => {
  const allPosts = await posts.getAll();

  response.json({
    success: true,
    data: allPosts,
  });
});

router.get("/:id", async (request, response) => {
  const postsById = await posts.getById(request.params.id);

  response.json({
    success: true,
    data: postsById,
  });
});

router.post("/", async (request, response) => {
  const { name, tags, image, postContent } = request.body;
  const postsCreated = await posts.create(name, tags, image, postContent);

  response.json({
    success: true,
    message: "Post creado",
    data: postsCreated,
  });
});

module.exports = router;
