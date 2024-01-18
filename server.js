const express = require("express");
const app = express();
const morgan = require("morgan");

const myBlogs = [
  {
    title: "Day 1",
    snippet:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum sapiente odio culpa necessitatibus aspernatur optio neque ducimus distinctio ea quis?",
  },

  {
    title: "Day 2",
    snippet:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum sapiente odio culpa necessitatibus aspernatur optio neque ducimus distinctio ea quis?",
  },
];

//register view engine
app.set("view engine", "ejs");

//json middleware
app.use(express.json());

//url encoded
app.use(express.urlencoded({ extended: false }));

//morgan middleware
app.use(morgan("dev"));

//get images
app.use(express.static("images"));

//get styles
app.use(express.static("styles"));

//listen for requests
app.get("/", (req, res) => {
  res.render("index", { title: "HOME PAGE", blogs: myBlogs });
});

app.get("/show", (req, res) => {
  res.render("show", { title: "SHOW PAGE", blog: myBlogs[1] });
});

// app.get("/:0", (req, res) => {
//     // res.json(myBlogs[0])
//     // res.end({myBlogs[0])
//     // const arrayEl = req.params.el
//     res.render("show", {title: "Show First Post", blog: myBlogs[0]})
// })

app.post("/blog", (req, res) => {
  const blog = req.body;
  myBlogs.push(blog);
  console.log(req.body);
  res.status(200).render("blog", { title: "BLOG PAGE", blogs: myBlogs });
});

app.get("/about", (req, res) => {
  //render a view from the views folder without the extension
  res.render("about", { title: "ABOUT PAGE - ABOUT EJS" });
});

app.get("/blogs/create", (req, res) => {
  res.render("createNewBlog", { title: "CREATE A NEW BLOG" });
});

//middleware
//logger middleware to log details of every request
//authentication check middleware for protected routes
//middleware to parse JSON data from requests
//return 404 pages
// //redirect
app.get("/about-us", (req, res) => {
  res.render("about", { title: "You've been redirected" });
});

app.get("/download-file", (req, res) => {
  res.download("images/sad-face.jpeg");
});

function handleErr() {}

app.post("/blogs", (req, res) => {
    myBlogs.push({title: "Day 3", snippet: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum sapiente odio culpa necessitatibus aspernatur optio neque ducimus distinctio ea quis?"})
    console.log({blogs: myBlogs})
})

//404 page - - middleware - use for every request if no other matches made - must go at the end of all the requests
app.use((req, res) => {
  res.status(404).render("404", { title: "Page Not Found" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening for requests on PORT ${PORT}`);
});
