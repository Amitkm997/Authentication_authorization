

import React, { useState } from 'react'
import API from '../api';

export default function Login() {
     const[form,setForm]=useState({email:'',password:''});

    const submitHandler=async(e)=>{
       e.preventDefault();
       let res=await API.post('/login',form);
       console.log(res)
    }
    return (
        <>
            <form onSubmit={submitHandler}>
            <input type="text"
                 placeholder='Email' 
                 onChange={(e)=>setForm({...form,email:e.target.value})} /><br/><br/>
                 <input type="text"
                 placeholder='Password'
                 onChange={(e)=>setForm({...form,password:e.target.value})}  /><br/><br/>
                 <button type='submit'>Submit</button>
            </form>
        </>

    )
}