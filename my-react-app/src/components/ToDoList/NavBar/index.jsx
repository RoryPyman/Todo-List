import './index.css'
import save from '../../../backend/save.js';
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Sort from './sort.jsx';


const NavBar = ({ user, tasks, setUser, setTasks, navigate }) => {  
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    const handleSaveExit = () => {
        handleSave()
        handleExit()
    }
    const handleExit = () => {
        setUser('')
        navigate('/')
    }
    const handleSave = () => {
        if (user) {
            save(tasks, user);
        }
    }
    const handleLogin = () => {
        navigate('/login')
    }
    const handleRegister = () => {
        navigate('/register')
    }
    const clearAll = () => {
        setTasks([])        
    }

    return (
        <div className='navbar'>
          <div onClick={toggleMenu}>
            {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
    
          {/* Menu */}
          {isOpen && (
            <div className="menu">
              <ul>
                <li><button className='todo-button' onClick={clearAll}>Clear Tasks</button></li>
                {user && <div>
                    <li><button className='todo-button' onClick={handleSave}>Save</button></li>
                <li><button className='todo-button' onClick={handleSaveExit}>Save and Exit</button></li></div>
                }
                {!user && <div>
                    <li><button className='todo-button' onClick={handleLogin}>Login</button></li>
                    <li><button className='todo-button' onClick={handleRegister}>Register</button></li></div>}
                <li><button className='todo-button' onClick={handleExit}>Exit</button></li>
                <Sort 
                tasks={tasks}
                setTasks={setTasks}/>
              </ul>
            </div>
          )}
        </div>
      );
}

export default NavBar
