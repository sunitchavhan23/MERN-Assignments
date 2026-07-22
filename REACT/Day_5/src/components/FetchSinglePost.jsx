import axios from 'axios'
import React, { useEffect, useState } from 'react'

const FetchSinglePost = () => {
    const [post, setPost] = useState({})
    const [id, setId] = useState(0)
    const [btnClicked,setBtnClicked]=useState(0)

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${btnClicked}`)
        .then((res) => {
            setPost(res.data)
        }).catch((err) => {
            console.log(err);
            
        });
    },[btnClicked])

    const handleClick=()=>{
        setBtnClicked(id)
    }
    return (
        <div>
            <input type="text" onChange={(e)=>setId(e.target.value)} />
            <button onClick={handleClick}>Search</button>
            <h3>{post.title}</h3>
        </div>
    )
}

export default FetchSinglePost
