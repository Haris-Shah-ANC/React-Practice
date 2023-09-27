// import axios from "axios";
import { useEffect, useState } from "react";

export default function RestApp() {

    const [posts, setPosts] = useState([])

    // for calling apis using axios

    // const client = axios.create({
    //     baseURL: 'https://jsonplaceholder.typicode.com/posts'
    // });

    // const fetchPosts = () => {
    //     fetch("https://jsonplaceholder.typicode.com/posts?_limit=4")
    //     .then(response => {
    //         return response.json()
    //     })
    //     .then(data => {
    //         setPosts(data)
    //     })
    //     .catch((err) => {
    //         console.log(err.message)
    //     })
    // }

        /// Fetching posts data using axios

    // const fetchPosts = async () => {
    //     const response = await client.get('?_limit=3')
    //     setPosts(response.data)
    // }

    ///// Fetching posts data using async await

    const fetchPosts = async () => {
        try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=4");
        const data = await response.json();
        setPosts(data);
        } catch(err){
            console.log('fetch post error message',err)
        }
    }


    useEffect(() => {
        fetchPosts()
    }, []);


    // const addPost = (title,body) => {
    //     fetch('https://jsonplaceholder.typicode.com/posts',{
    //         method : 'POST',
    //         body : JSON.stringify({
    //             title : title,
    //             body : body,
    //             userId : Math.random().toString(36).slice(2),
    //         }),
    //         headers : {
    //             'Content-type' : 'application/json; charset=UTF-8'
    //         },
    //     })
    //     .then((response) => response.json())
    //     .then((data) => {
    //         setPosts((prevPosts) => [data,...prevPosts])
    //     })
    // }

    // using axios

    // const addPost = async (title, body) => {
    //     const response = await client.post('', {
    //         title,
    //         body
    //     });
    //     setPosts((prevPosts) => [response.data, ...prevPosts])
    // }

    //// Add new posts using async await

    const addPost = async (title,body) => {
        try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
            method : 'POST',
            body : JSON.stringify({
                title : title,
                body : body,
                userId : Math.random().toString(36).slice(2)
            }),
            headers :{
                'Content-type' : 'application/json; charset=UTF-8'
            },
        })
        const data = await response.json()
        setPosts((prevPosts) => [data,...prevPosts])
        }catch(err){
            console.log('add post error message',err)
        } 
    }


    // const deletePost = (id) => {
    //     fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
    //         method : 'DELETE'
    //     })
    //     .then((response) => {
    //         if(response.status === 200){
    //             setPosts(
    //                 posts.filter((post) => {
    //                     return post.id !== id ;
    //                 })
    //             )
    //         }else {
    //             return;
    //         }
    //     })
    // }

        //using axios

    // const deletePost = async (id) => {
    //     const response = await client.delete(`${id}`)

    //     setPosts(
    //         posts.filter((post) => {
    //             return post.id !== id
    //         })
    //     )
    // }

    /// deleting a post using async await

        const deletePost = async (id) => {
            try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
                method : 'DELETE'
            })

            if(response.status === 200){
                setPosts(
                    posts.filter((post) => {
                        return post.id !== id
                    })
                )
            }            
        } catch(err){
            console.log('delete post error message',err)
        }
    }


    return (
        <main>
            <hr /> <br />
            <h1 className="text-lg font-bold">Consuming REST API tutorial</h1>
            <AddPost addPost={addPost} />
            <section className="post-container">
                <h2 className="text-center mt-4"><b>Post</b></h2>
                {posts.map((post) =>
                    <Post
                        key={post.id}
                        id={post.id}
                        title={post.title}
                        body={post.body}
                        deletePost={deletePost}
                    />
                )}
            </section>
        </main>
    )
}

function AddPost({ addPost }) {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addPost(title, body);
        setTitle('');
        setBody('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add new Post</h2>
            <div className="input-container">
                <label htmlFor='title'>Title</label>
                <input
                    name="title"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className="input-container">
                <label htmlFor="body">body</label>
                <textarea
                    name="body"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
            </div>
            <button type="submit" className="btn-submit">Add Post</button>
        </form>
    )
}

function Post(props) {

    let { id, title, deletePost, body } = props

    return (
        <div className="post-card mt-2">
            <h2 className="post-title">{title}</h2>
            <p className="post-body">{body}</p>
            <button
                className="btn-delete"
                onClick={() => deletePost(id)}
            >Delete</button>
        </div>
    )

}