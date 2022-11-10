const Blog = require("../models/blog");
const blogRouter = require("express").Router();

blogRouter.get("/", (request, response, next) => {
  Blog.find({})
    .then((blogs) => {
      response.json(blogs);
    })
    .catch((e) => next(e));
});

blogRouter.get("/:id", (request, response, next) => {
  Blog.findById(request.params.id)
    .then((foundBlog) => {
      if (foundBlog) {
        response.json(foundBlog);
      } else {
        response.status(404).end();
      }
    })
    .catch((e) => next(e));
});

blogRouter.post("/", (request, response) => {
  const blog = new Blog(request.body);

  blog
    .save()
    .then((result) => {
      response.status(201).json(result);
    })
    .catch((e) => next(e));
});

blogRouter.delete("/:id", (request, response) => {
  Blog.findByIdAndDelete(request.params.id)
    .then(() => response.status(204).end())
    .catch((e) => next(e));
});

module.exports = blogRouter;
