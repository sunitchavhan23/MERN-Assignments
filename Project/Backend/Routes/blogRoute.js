const express = require("express");
const {
  displayBlog,
  addBlog,
  showBlogs,
  updateBlog,
  deleteBlog,
} = require("../Controller/blogController");

const routes = express.Router();

routes.get("/", displayBlog);
routes.post("/add", addBlog);
routes.get("/blog/:id", showBlogs);
routes.patch("/blog/:id", updateBlog);
routes.delete("/:id", deleteBlog);

module.exports = routes;
