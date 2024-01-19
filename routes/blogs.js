const express = require("express");
const router = express.Router()
const {createIndex, showPage, postBlog, aboutBlog, createBlog, redirectBlog, downloadImage} = require("../controllers/blogsController.js")

router
.get("/", createIndex)
.get("/show", showPage)
.post("/", postBlog)
.get("/about", aboutBlog)
.get("/create", createBlog)
.get("/about-us", redirectBlog)
.get("/download-file", downloadImage);

module.exports = router