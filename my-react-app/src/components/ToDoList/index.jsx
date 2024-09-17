import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import TodoItem from '../ToDoItem/index.jsx';
import save from '../../backend/save.js';
import load from '../../backend/load.js';

const TodoList = () => {
    const location = useLocation();
    const [tasks, setTasks] = useState([]);
    const [text, setText] = useState('');
    const [importance, setImportance] = useState('low');
    const [user, setUser] = useState('');

    // Load tasks on component mount and when the user changes
    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const username = queryParams.get('user');
        setUser(username); // Store the username in state
        
        if (username) {
            load(username).then(arr => setTasks(arr));
        }
    }, [location.search]);

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
        setTasks(tasks.filter(task => task.id !== id));
    };

    const toggleCompleted = (id) => {
        setTasks(tasks.map(task => 
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    const handleSave = () => {
        if (user) {
            save(tasks, user);
        }
    };

    return (
        <div className="todo-list">
            {tasks.map(task => (
                <TodoItem
                    key={task.id}
                    task={task}
                    deleteTask={deleteTask}
                    toggleCompleted={toggleCompleted}
                />
            ))}
            <input
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
            <button onClick={handleSave}>Save</button> {/* Added label to button */}
        </div>
    );
};

export default TodoList;
