const sequelize = require("../config/connection")
const {User,Blog, Comments} = require("../models")

const users = [
    {
        username:"ericmatthew",
        password:"password"
    },
    {
        username:"mattheweric",
        password:"password1"
    },
    {
        username:"taylormatthew",
        password:"Password1"
    }
]

const blogs = [
    {
        title:"my first blog",
        body:"Welcome to my blog, im going to do this every day! Like share subscribe",
    },
    {
        title:"my final blog",
        body:"I cant do this anymore, blogging every day is too hard.  It was a fun half week yall",
    },
    {
        title:"Cats: a review",
        body:"I love cats I love every kind of cat.  I want to hug all them but you cant. Cant hug every cat......Cant hug every cat. ",
    }
]

const comments = [
    {
        body:"Nice",
        BlogId:1,
        UserId:1
    },
    {
        body:"Thank you",
        BlogId:2,
        UserId:1
    },
    {
        body:"Hoorah",
        BlogId:3,
        UserId:2
    }
]

const feedMe = async ()=>{
    try{
        await sequelize.sync({force:true})
        await User.bulkCreate(users,{
            individualHooks:true
        });
        await Blog.bulkCreate(blogs);
        await Comments.bulkCreate(comments);
        process.exit(0);
    } catch(err){
        console.log(err)
    }
}

feedMe()