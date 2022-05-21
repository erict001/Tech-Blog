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
           res.redirect("/api/blog/:id")
        } else {
            alert("trumpet sound")
        }
    })
})