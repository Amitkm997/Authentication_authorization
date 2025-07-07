import React, { useState } from 'react'

export default function Register() {
    const[form,setForm]=useState({name:"",email:"",password:""});
    console.log(form.name)
    console.log(form.email)
    console.log(form.password)
    const handleSubmit=(e)=>{
        e.preventDefault()// prevent page to reload
          alert("form submitted successfully");
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                 <input type="text"
                 placeholder='Name'
                 onChange={(e)=>setForm({...form,name:e.target.value})} /><br/><br/>
                 <input type="text"
                 placeholder='Email' 
                 onChange={(e)=>setForm({...form,email:e.target.value})} /><br/><br/>
                 <input type="text"
                 placeholder='Password'
                 onChange={(e)=>setForm({...form,password:e.target.value})}  /><br/><br/>
                 <button type='submit'>Submit</button>
            </form>
            <h1>Live preview</h1>
            <h2> Name:{form.name}</h2>
            <h2> Email:{form.email}</h2>
            <h2> Password:{form.password}</h2>
            
        </>

    )
}
