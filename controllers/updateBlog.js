const express = require('express');
const router = express.Router();
const {User,Blog} = require('../models');

router.get("/blogupdate",(req,res)=>{
    Blog.findByPk(req.params.id, {})
        .then(dbBlog => {
            res.json(dbBlog);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ msg: "an error occured", err });
        });
});