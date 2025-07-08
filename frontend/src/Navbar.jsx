import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
      <nav style={{margin:"50px"}}>
        <Link to='/register' style={{margin:"50px"}}>Register</Link>
        <Link to='/login' style={{margin:"50px"}}>Login</Link> 
        <Link to='/createPost' style={{margin:"50px"}}>CreatePost</Link>
      </nav>
    </>
  )
}
