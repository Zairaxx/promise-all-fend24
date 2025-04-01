const urls = ["https://jsonplaceholder.typicode.com/posts/1",
    "https://jsonplaceholder.typicode.com/users/1",
    "https://jsonplaceholder.typicode.com/comments/1"
]

//Loopa igenom alla URLS, och gör ett GET-request för varje.
const getData = async (url) => {
    let response = await fetch(url);
    let json = await response.json();
    return json
}


const multipleRequests = async () => {
    // let promises = [getData(urls[0]), getData(urls[1]), getData(urls[2])]

    let promises = urls.map(url => {return getData(url)})
    console.log(promises);

        let [post,user,comment] = await Promise.all(promises);
        
    console.log(post,user,comment);

    document.body.innerHTML = `
    <h2>${post.title}<h2>
    <strong>Written by: ${user.name}</strong>
    <hr>
    <p>${comment.body} - ${comment.email}</p>
    `
}

document.querySelector("button").addEventListener("click", multipleRequests)

// Promise.all(promises)