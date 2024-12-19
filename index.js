async function getUsers(){
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    let j = await response.json();
    console.log(j);
    return j;
}

async function getPosts(){
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let j = await response.json();
    console.log(j);
    return j;
}

async function getToDos(){
    let response = await fetch('https://jsonplaceholder.typicode.com/todos');
    let j = await response.json();
    console.log(j);
    return j;
}

getUsers()
.then((json)=>{
    let usersInfo = document.getElementById('users');
    for (let i = 0; i < 9; i++){
        // console.log(JSON.stringify(json[i]))
        usersInfo.innerHTML += JSON.stringify(json[i].name).substring(1, JSON.stringify(json[i].name).length - 1) + '<br>';
        usersInfo.innerHTML += '@' + JSON.stringify(json[i].username).substring(1, JSON.stringify(json[i].username).length - 1) + '<br>';
        usersInfo.innerHTML += '<br>';
    }
})

getPosts()
.then((json)=>{
    for (let i = 1; i < 6; i++){
        let currPost = document.getElementById('post-' + i);
        currPost.innerHTML += '<h3>' + JSON.stringify(json[i].title).substring(1, JSON.stringify(json[i].title).length - 1) + '</h3> <br>';
        currPost.innerHTML += '<p>' + JSON.stringify(json[i].body).substring(1, JSON.stringify(json[i].body).length - 1) + '</p>';
    }
})

getToDos()
.then((json)=>{
    let toDoList = document.getElementById("to-do-list");
    for (let i = 1; i < 13; i++){
        console.log(JSON.stringify(json[i].title).substring(1, JSON.stringify(json[i].title).length - 1))
        toDoList.innerHTML += '<li>' + JSON.stringify(json[i].title).substring(1, JSON.stringify(json[i].title).length - 1) + '</li> <br>';
    }
})
