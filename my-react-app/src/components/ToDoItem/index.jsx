import React from 'react';
function TodoItem({ task, deleteTask, toggleCompleted, importance }) {
    function handleChange() {
    toggleCompleted(task.id);
    }
    
    return (
        <div className="todo-item">
            <p>{task.text}</p>
            <input 
                type="checkbox"
                checked={task.completed}
                onChange={handleChange}
            />
            <p className='importance'>Importance: {importance}</p>
            <button onClick={() => deleteTask(task.id)}> Delete Task </button>
        </div>
    );
}
export default TodoItem;