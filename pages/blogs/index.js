import {useState, useEffect} from 'react'
import Snippet from '../../components/Snippet'
import SearchBox from '../../components/SearchBox'

const Blogs = ()=>{

    const [posts, setPosts] = useState([])

    useEffect(()=>{
        fetch('https://blogbook-brown.vercel.app/api/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
        .catch(err => console.log(err))
    },[posts])
    return(
        <>
       
        <SearchBox posts = {posts}/>
        {posts.map(post => <Snippet key={post._id} title={post.title} author={post.author} />)}
       
        </>
    )
}

export default Blogs
