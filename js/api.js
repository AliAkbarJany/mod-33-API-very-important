
function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
}

document.getElementById('dataLoading').addEventListener('click', function () {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json.title))
})

function loadUsers() {
    // console.log('click me here');
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => displayUsers(data))
}

function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => console.log(json))

}
// loadPosts()
function displayUsers(data) {
    const ul = document.getElementById('users');
    // console.log(data);
    for (const user of data) {
        console.log(user);
        console.log(user.name);
        const li = document.createElement('li');
        /* li.innerText = 'i am a list';
        console.log(li); */

        // li.innerText = user.name;

        li.innerText = `name:${user.name} 
                        Email:${user.email}`;
        console.log(li)
        ul.appendChild(li);
    }
}