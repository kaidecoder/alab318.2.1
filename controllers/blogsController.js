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


exports.createIndex = (req, res) => {
    res.render("index", { title: "HOME PAGE", blogs: myBlogs });
}

exports.showPage = (req, res) => {
    res.render("show", { title: "SHOW PAGE", blog: myBlogs[1] });
    }

exports.postBlog = (req, res) => {
    const blog = req.body;
    myBlogs.push(blog);
    console.log(req.body);
    res.status(200).render("blog", { title: "BLOG PAGE", blogs: myBlogs });
  }

exports.aboutBlog = (req, res) => {
//render a view from the views folder without the extension
res.render("about", { title: "ABOUT PAGE - ABOUT EJS" });
}

exports.createBlog = (req, res) => {
    res.render("createNewBlog", { title: "CREATE A NEW BLOG" });
}

exports.redirectBlog = (req, res) => {
    res.render("about", { title: "You've been redirected" });
  }

exports.downloadImage = (req, res) => {
res.download("images/sad-face.jpeg");
}

