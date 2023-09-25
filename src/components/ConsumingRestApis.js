import { useEffect, useState } from "react";

function MainApp(){

    const [posts,setPosts] = useState([])

    const fetchPosts = () => {

    }

    useEffect(() => {
        fetchPosts()
    },[]);

    const addPost = (title,body) => {   

    };

    const deletePost = (id) => {

    }

    return (
        <main>
            <h1>Consuming REST api tutorial</h1>
            <AddPost addPost={addPost}/>
            <section className="post-container">
                <h2>Posts</h2>
                {posts.map((post) => 
                <Post 
                key={post.id}
                id={post.id}
                title={post.title}
                deletePost={deletePost}
                />
                )}
            </section>
        </main>
    )
}