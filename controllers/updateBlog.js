const router = require('express').Router();
const { User, Blog } = require('../models');

//localhost:3000/blog
router.get("/", (req, res) => {
  Blog.findAll().then(blogs => {
    console.log(blogs)
    const hbsBlogs = blogs.map(blog => blog.get({ plain: true }))
    console.log("==========")
    console.log(hbsBlogs)
    const loggedIn = req.session.user ? true : false
    res.render("update", { blogs: hbsBlogs, loggedIn, username: req.session.user?.username })
  })
})

//localhost:3000/blog/:id
router.get("/:id", (req, res) => {
  if (!req.session.user) {
    return res.redirect("/home")
  }
  Blog.findByPk(req.params.id)
    .then(blogData => {
      console.log("====================")
      console.log(blogData);
      res.render("update", blogData)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

//render for handlebars
//localhost:3000/blog/:id
router.put("/:id", async (req, res) => {
  Blog.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then(updatedUser => {
    res.json(updatedUser);
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

module.exports = router;