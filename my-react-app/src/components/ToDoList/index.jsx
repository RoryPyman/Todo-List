import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import TodoItem from '../ToDoItem/index.jsx';
import load from '../../backend/load.js';
import NavBar from './NavBar/index.jsx';
import './index.css';

const TodoList = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [tasks, setTasks] = useState([]);
    const [text, setText] = useState('');
    const [importance, setImportance] = useState('low');
    const [user, setUser] = useState('');

    useEffect(() => {
        const username = location.state?.user || '';
        setUser(username);

        if (username) {
            load(username)
            .then(arr => setTasks(arr))
            .catch(e => console.error(e.message));
        }
    }, [location.state]);

    const addTask = (importance) => {
        const newTask = {
            id: Date.now(),
            name: text,
            completed: false,
            importance: importance
        };
        setTasks([...tasks, newTask]);
        setImportance('low');
        setText('');
    };

    const deleteTask = (id) => {
        setTasks(tasks => tasks.filter(task => task.id !== id));
    };

    const toggleCompleted = (id) => {
        setTasks(tasks => tasks.map(task => 
            task.id === id ? { ...task, completed: !task.completed } : task
        )); // Functional update
    };

    return (
        <div className="todo-list">
            <div className='navbar'>
                <NavBar
                user={user} 
                tasks={tasks} 
                setUser={setUser} 
                setTasks={setTasks} 
                navigate={navigate}/>
            </div>
            <div className='todo-list-grid'>
                <h3>Your Tasks</h3>
                {tasks.length > 0 ? (
                    tasks.map(task => (
                        <TodoItem
                            key={task.id}
                            task={task}
                            deleteTask={deleteTask}
                            toggleCompleted={toggleCompleted}
                        />
                    ))
                ) : (
                    <p>No tasks available</p>
                )} 
            </div>
            <div className='to-do-form'>
                <h3>Add a task</h3>
                <input className='textinput'
                    value={text}
                    onChange={e => setText(e.target.value)}
                    placeholder="Enter task text"
                />
                <div className="radioinput">
                    <label>
                        <input
                            type="radio"
                            value="low"
                            checked={importance === 'low'}
                            onChange={e => setImportance(e.target.value)}
                        />
                        Low
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="med"
                            checked={importance === 'med'}
                            onChange={e => setImportance(e.target.value)}
                        />
                        Medium
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="high"
                            checked={importance === 'high'}
                            onChange={e => setImportance(e.target.value)}
                        />
                        High
                    </label>
                </div>
                <button className='add-button' onClick={() => addTask(importance)}>Add</button>
            </div>
        </div>
    );
};

export default TodoList;
