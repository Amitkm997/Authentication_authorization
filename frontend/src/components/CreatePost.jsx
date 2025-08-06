
import React, { useState } from 'react'
import API from '../api'
export default function CreatePost({onPostCreated}) {
    const[title,setTitle]=useState('');
    const[content,setContent]=useState('')
   console.log(title,content)
    const handleSubmit=async()=>{
        const res=await API.post('/post',
            {title,content},
            {headers:{
                Authorization:`Bearer ${token}`
            }}
        )
        alert("post created successfully")
        if(onPostCreated){
            onPostCreated(res.data)
        }
        console.log(res)
    }

  return (
    <form onSubmit={handleSubmit}>
       <input type="text"
       placeholder='Enter Title'
       value={title}
       onChange={(e)=>setTitle(e.target.value)}
       ></input> <br /><br />
       <input type="text"
       placeholder='Enter Content'
       value={content}
       onChange={(e)=>setContent(e.target.value)}
       ></input><br /><br/>
       <button type='submit'>Create Post</button>
    </form>
  )
}
