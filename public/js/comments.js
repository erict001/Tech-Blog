document.querySelector("#addComment").addEventListener("submit", e => {
    e.preventDefault()
    const commentObj = {
        body: document.querySelector("#body").value,
        blogId: document.querySelector("#commentId").value
    }
    fetch("/api/comments", {
        method: "POST",
        body: JSON.stringify(commentObj),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => {
        if (res.ok) {
            location.reload()
        } else {
            alert("trumpet sound")
        }
    })
})