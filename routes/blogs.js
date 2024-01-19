const express = require("express");
const router = express.Router()
const {createIndex, showPage, postBlog, aboutBlog, createBlog, redirectBlog, downloadImage} = require("../controllers/blogsController.js")


//Index Page
router.get("/", createIndex);
 
//Show a Blog
router.get("/show", showPage);
  
//Add a Blog
router.post("/", postBlog);

//About the blog
router.get("/about", aboutBlog);

//Create new Blog
router.get("/create", createBlog);

//Redirect a Blog
router.get("/about-us", redirectBlog);

//Download an Image
router.get("/download-file", downloadImage);

module.exports = router