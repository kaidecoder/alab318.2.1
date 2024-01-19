const express = require("express");
const app = express();
const morgan = require("morgan");
const blogRoutes = require("./routes/blogs")



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

//use routes
app.use("/blogs", blogRoutes)

//404 page - - middleware - use for every request if no other matches made - must go at the end of all the requests
app.use((req, res) => {
  res.status(404).render("404", { title: "Page Not Found" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening for requests on PORT ${PORT}`);
});
