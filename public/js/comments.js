// const req = require("express/lib/request");

async function addComment(id) {
    try {
        const commentObj = {
            "body": document.querySelector("#commentId").value,
            "BlogId": req.body.BlogId
        }
        // do stuff
        const res = await fetch(`/api/comments`, {
            method: "POST",
            body: JSON.stringify(commentObj),
            headers: {
                "Content-Type": "application/json"
            }
        })
            location.href = '/profile'
    } catch (error) {
        console.error(error)
    }
    console.log(id);
};

async function deleteComment(id) {
    try {
        // do stuff
        const res = await fetch(`/api/comments/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        location.reload()
    } catch (error) {
        console.error(error)
    }
}
