import  ToDoList  from './components/ToDoList'
import Login from './components/Login/index'
import Home from './components/Home/index'
import Register from './components/Register'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'

function App() {

  return (
    
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element= {<Home />} />
          <Route path='/list' element= {<ToDoList />} />
          <Route path='/login' element= {<Login />} />
          <Route path='/register' element= {<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
