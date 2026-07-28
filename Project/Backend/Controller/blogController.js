const blogModel = require("../Model/blogModel");

const displayBlog = async (req, resp) => {
  const result = await blogModel.find();
  if (result != null) {
    resp.status(200).json(result);
  } else {
    resp.status(404).json({ message: "No Blogs" });
  }
};

const showBlogs = async (req, resp) => {
  const result = await blogModel.findById(req.params.id);
  if (result != null) {
    resp.status(200).json(result);
  } else {
    resp.status(404).json({ message: "No Blogs" });
  }
};

const addBlog = async (req, resp) => {
  const new_blog = new blogModel(req.body);
  const result = await new_blog.save();
  resp.status(200).json(result);
};

const deleteBlog = async (req, resp) => {
  const result = await blogModel.findByIdAndDelete(req.params.id);
  if (result != null) {
    resp.status(200).json({ message: "Blog Deleted" });
  } else {
    resp.status(404).json({ message: "No Blogs" });
  }
};

const updateBlog = async (req, resp) => {
  const result = await blogModel.findByIdAndUpdate(req.params.id, req.body);
  resp.status(200).json({ message: "Blog Updated" });
};

module.exports = { displayBlog, showBlogs, addBlog, deleteBlog, updateBlog };
