// add a comment
async function commentFormHandler(event) {
    event.preventDefault();
    // console.log(event);
    const text = document.querySelector('.textarea').value.trim();
    const post_id = parseInt(event.target.getAttribute("data-postid"))
    console.log(text,post_id);
    if (text) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
                text,
                post_id,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert('Failed to add comment');
        }
    }
}

document.querySelector('#submitButton').addEventListener('click', commentFormHandler);


// delete comment
async function deleteFormHandler(event) {
    event.preventDefault();
    commentToDelete = event.target.parentElement;
    const response = await fetch(`/api/comments/${commentToDelete.dataset.id}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        document.location.reload();
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.delete').addEventListener('click', deleteFormHandler);