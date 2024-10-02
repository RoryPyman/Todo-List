import  ToDoList  from './components/ToDoList'
import Login from './components/Login/index'
import Home from './components/Home/index'
import Register from './components/Register'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import { Helmet, HelmetProvider } from 'react-helmet-async';  // Optional for setting titles

function App() {

  return (
    <HelmetProvider>
      <div className='App'>
        <BrowserRouter>
          <Routes>
          <Route 
              path='/' 
              element={<>
                  <Helmet>
                    <title>Home - Todo App</title>
                  </Helmet>
                  <Home />
                </>} />
            <Route 
              path='/list' 
              element={<>
                  <Helmet>
                    <title>To-Do List - Todo App</title>
                  </Helmet>
                  <ToDoList />
                </>} />
            <Route 
              path='/login' 
              element={<>
                  <Helmet>
                    <title>Login - Todo App</title>
                  </Helmet>
                  <Login />
                </>} />
            <Route 
              path='/register' 
              element={<>
                  <Helmet>
                    <title>Register - Todo App</title>
                  </Helmet>
                  <Register />
                </>} />
          </Routes>
        </BrowserRouter>
      </div>
    </HelmetProvider>
  )
}

export default App
