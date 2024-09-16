import React, { useState } from 'react';
import TodoItem from '../ToDoItem';

function TodoList() {
    const [tasks, setTasks] = useState([
        {
        id: 1,
        text: 'Go to Gym',
        completed: true,
        importance: 'low'
        },
        {
        id: 2,
        text: 'Meet with Jack',
        completed: false,
        importance: 'high'
        }
        ]);
        
        const [text, setText] = useState('');
        const [importance, setImportance] = useState('low')
   function addTask(text, importance) {
    const newTask = {
    id: Date.now(),
    text,
    completed: false,
    importance: importance
    };
    setTasks([...tasks, newTask]);
    setImportance('low')
    setText('');
    }
    function handleImportanceChange(e) {
        setImportance(e.target.value);
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
   return (
    <div className="todo-list">
    {tasks.map(task => (
    <TodoItem
    key={task.id} 
    task={task}
    deleteTask={deleteTask}
    toggleCompleted={toggleCompleted} 
    importance={importance}
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
            onChange={handleImportanceChange}
        />
        Low
    </label>
    <label>
        <input
            type="radio"
            value="med"
            checked={importance === 'med'}
            onChange={handleImportanceChange}
        />
        Medium
    </label>
    <label>
        <input
            type="radio"
            value="high"
            checked={importance === 'high'}
            onChange={handleImportanceChange}
        />
        High
    </label>
    </div>  


   <button onClick={() => addTask(text, importance)}>Add</button>
    </div>
    );
   }
   export default TodoList;