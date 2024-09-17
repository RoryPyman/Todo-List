import React, { useState } from 'react';
import TodoItem from '../ToDoItem';
import { getDatabase, ref, set, push } from 'firebase/database'

import cong from '../../../public/configuration.jsx';

function TodoList() {
    // initial vals
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
        //add to database

        const db = getDatabase(cong)
        const dbpushref = push(ref(db, ('Users/RoryPyman/Tasks/' + Date.now())))
        set(dbpushref, {
            name: text,
            completed: false,
            importance: importance
        }).catch((e) => {
            console.log("Error:", e.message)
        })
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


   <button onClick={() => addTask(text, importance)}>Add</button>
    </div>
    );
   }
   export default TodoList;