console.log("hello")
document.querySelector("#newBlog").addEventListener("submit",e=>{
    e.preventDefault()
    const blogObj = {
        title:document.querySelector("#title").value,
        body:document.querySelector("#body").value,
    }
    fetch("/api/blogs",{
        method:"POST",
        body:JSON.stringify(blogObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
           location.reload()
        } else {
            alert("trumpet sound")
        }
    })
})

document.querySelector("#updateBlog").addEventListener("submit",e=>{
    e.preventDefault()
    const blogObj = {
        title:document.querySelector("#title").value,
        body:document.querySelector("#body").value,
    }
    fetch("/api/blogs",{
        method:"PUT",
        body:JSON.stringify(blogObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
           res.redirect("/profile")
        } else {
            alert("trumpet sound")
        }
    })
})

//function that fires when event listener is clicked
async function editPost (id) {
    try {
        // do stuff
        const res = await fetch(`/api/blogs/${id}`, {
            method: "PUT",
            body: JSON.stringify({
                post_id: id,
                title,
                content
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        res.render("main")
    } catch (error) {
        console.error(error)
    }
    console.log(id);
};

async function deletePost(id) {
    try {
        // do stuff
        const res = await fetch(`/api/blogs/${id}`, {
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
