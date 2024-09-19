import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import TodoItem from '../ToDoItem/index.jsx';
import save from '../../backend/save.js';
import load from '../../backend/load.js';
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
    }, [location.state]); // Dependency on location.state

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

    const handleSave = () => {
        if (user) {
            save(tasks, user);
        }
    };

    const handleExit = () => {
        setUser('')
        navigate('/')
    }

    const handleSaveExit = () => {
        handleSave()
        handleExit()
    }

    return (
        <div className="todo-list">
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
            <button onClick={() => addTask(importance)}>Add</button>
            <button onClick={handleSave}>Save</button>
            <button onClick={handleExit}>Exit</button>
            <button onClick={handleSaveExit}>Save and Exit</button>
        </div>
    );
};

export default TodoList;
