import React from 'react';
import './index.css'
function TodoItem({ task, deleteTask, toggleCompleted}) {
    function handleChange() {
    toggleCompleted(task.id);
    }
    
    return (
        <div className={`todo-item ${task.completed ? 'completed' : ''}`}>
            <p>{task.name}</p>
            <p className='importance'>Importance: {task.importance}</p>
            <div className='checkboxlabel'> Completed 
                <input 
                    type="checkbox"
                    checked={task.completed}
                    onChange={handleChange}
                />
            </div>
            <button onClick={() => deleteTask(task.id)}> Delete Task </button>
        </div>
    );
}
export default TodoItem;