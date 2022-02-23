// console.log('click post')
function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(responde => responde.json())
        .then(data => displayPosts(data));
}
loadPosts();

function displayPosts(posts) {
    console.log(posts);
    const postContainer = document.getElementById('post-container')
    for (const post of posts) {
        console.log(post);
        console.log(post.title);
        const div = document.createElement('div')
        div.innerHTML = `<h3>${post.title}</h3>
        <p>${post.body}</p>`;
        div.classList.add('post')
        postContainer.appendChild(div);
    }

}

function addAPost() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'my new post',
            body: 'this is my post',
            userId: 2,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
        .then(response => response.json())
        .then(data => console.log(data))
}