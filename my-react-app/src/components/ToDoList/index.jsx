import React, { useState } from 'react';
import TodoItem from '../ToDoItem/index.jsx';
import save from '../../backend/save.js'
import load from '../../backend/load.js'

function TodoList() {
    // initial vals
    const [tasks, setTasks] = useState([
        {
        id: 1,
        name: 'Go to Gym',
        completed: true,
        importance: 'low'
        },
        {
        id: 2,
        name: 'Meet with Jack',
        completed: false,
        importance: 'high'
        }
        ]);
        
        const [text, setText] = useState('');
        const [importance, setImportance] = useState('low')

   
    function addTask(importance) {
        const newTask = {
            id: Date.now(),
            name: text,
            completed: false,
            importance: importance
        };
        setTasks([...tasks, newTask]);
        setImportance('low')
        setText('');
        
    }

    function deleteTask(id) {
        setTasks(tasks.filter(task => task.id !== id));
}

    function toggleCompleted(id) {
        setTasks(tasks.map(task => {
        if (task.id === id) {
        return {...task, completed: !task.completed};
        } else {
        return task;
        } 
        }));
    }

    async function handleLoad(username) {
        const arr = await load(username)
        console.log(arr)
        setTasks(arr)
    }

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
    /> Text
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
    </div>
    );
   }
   export default TodoList;