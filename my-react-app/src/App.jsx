import  ToDoList  from './components/ToDo'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'

function App() {

  return (
    
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element= {<ToDoList />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
