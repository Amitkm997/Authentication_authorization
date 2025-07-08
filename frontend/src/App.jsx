import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Register from './components/Register'
import Navbar from './Navbar'
import Login from './components/Login'
import CreatePost from './components/CreatePost'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/createPost' element={<CreatePost/>}/>
      </Routes>
    </Router>
  )
}

export default App
