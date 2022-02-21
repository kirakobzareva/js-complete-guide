const listElement = document.querySelector(".posts");
const postTemplate = document.getElementById("template");


function sendHttpRequests(method, url) {
    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.responseType = "json";

        xhr.onload = function () {
            resolve(xhr.response);
            const listOfPosts = xhr.response;
        }
        xhr.send();
    });
    return promise;
}

async function fetchPosts() {
    const responseData = await sendHttpRequests("GET", "https://jsonplaceholder.typicode.com/posts");
    const listOfPosts = responseData;
    for (let post of listOfPosts) {
        const postEl = document.importNode(postTemplate.content, true);
        postEl.querySelector("h2").textContent = post.title.toUpperCase();
        postEl.querySelector("p").textContent = post.body;
        listElement.append(postEl);
    }
}

fetchPosts();


