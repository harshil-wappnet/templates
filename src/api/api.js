const fetchData = async () => {
    const response = await fetch('http://localhost:3000/posts');
    const finalData = await response.json();
    return finalData;
}


const fetchTags = async () => {
    const response = await fetch("http://localhost:3000/tags");
    const tagsData = await response.json();
    return tagsData;
};

const addPost = async (post) => {
    const response = await fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
    });

    return response.json();
};

export { fetchData, fetchTags, addPost };