const mongoose = require("mongoose");

const blogSchema = mongoose.Schema(
  {
    title: String,
    content: String,
    image: String,
    author: String,
  },
  { timestamps: true },
);

const blogModel = mongoose.model("blogs", blogSchema);

module.exports = blogModel;
