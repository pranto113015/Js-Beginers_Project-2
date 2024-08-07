// //manual api calling
// const posts = [
//     {    
//         id :1;
//         title: "this is title1",
//         body: "this is body1"
//     },

//     {
//         id :2;
//         title: "this is title2",
//         body: "this is body2"
//     },

//     {
//         id :3;
//         title: "this is title3",
//         body: "this is body3"
//     },

//     {
//         id :4;
//         title: "this is title4",
//         body: "this is body4"
//     },

// ];


// // manual data layout
{/* <div class="post">
<h4 class="post-title">Post title 1</h4>
<p class="post-body">
    Post description 1
</p>
</div>  */}



// fetch data
const fecthData = async (config) => {
    try {
        const res = await axios(config);
        return res.data;
    } catch (error) {
        throw Error("data is no fetched");
    }
};


// selection
const postsElement = document.querySelector('.posts');

const loadAllData = async () => {
    const posts = await fecthData("https://jsonplaceholder.typicode.com/posts");
    posts.map((post) => {
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = `<h3 class="post-id">${post.id}</h3>
                                 <h4 class="post-title">${post.title}</h4>
                                 <p class="post-body">${post.body}</p>`;
        postsElement.appendChild(postElement);
    });
};
loadAllData();
