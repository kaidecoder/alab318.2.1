const express = require("express")
const app = express()

//register view engine
app.set("view engine", "ejs")

//listen for requests
app.get("/", (req,res) => {
     const myBlogs = [
    //     {title: "Day 1", snippet: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum sapiente odio culpa necessitatibus aspernatur optio neque ducimus distinctio ea quis?"},
    //     {title: "Day 2", snippet: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum sapiente odio culpa necessitatibus aspernatur optio neque ducimus distinctio ea quis?"}
     ]
    res.render("index", {title: "HOME PAGE - LEARNING EJS", blogs: myBlogs})
})

app.get("/about", (req,res) => {
    //render a view from the views folder without the extension
    res.render("about", {title: "ABOUT PAGE - ABOUT EJS"})
})

app.get("/blogs/create", (req, res) => {
    res.render("createNewBlog", {title: "CREATE A NEW BLOG"})
})

// //redirect
app.get("/about-us", (req, res) => {
    res.render("about", {title: "You've been redirected"})
})

//404 page - - middleware - use for every request if no other matches made - must go at the end of all the requests
app.use((req, res) => {
    res.status(404).render("404", {title: "Page Not Found"})
})

const port = 3000
app.listen(port, () => {
    console.log(`Listening for requests on port ${port}`)
} )