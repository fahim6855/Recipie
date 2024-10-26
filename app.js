let container = document.querySelector(".container");




async function getData() {
    let URL = "https://dummyjson.com/recipes";
    let response = await fetch(URL);
    let Data = await response.json();
    let posts = Data.recipes;


    posts.map(post => {
        let postElm = document.createElement("div");
        postElm.classList.add("post");
        postElm.innerHTML = `
        <img src="${post.image}" alt="Food image">
        <h2 class="title">${post.name}</h2>
        <p class="body">${post.cuisine}</p>
            
        `;
        container.appendChild(postElm);
    })

    // titleH1.innerHTML = Data.posts[0].title;
    // bodyP.innerHTML = Data.posts[0].body;
    //console.log(posts);
}
getData();