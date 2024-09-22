import { useState } from "react";
import "./index.css"

const Sort = ({ tasks, setTasks }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    const sortTasks = (order) => {
      const importanceOrder = { 'low': 1, 'med': 2, 'high': 3 };
      let sortedTasks;
  
      if (order === 'importance') {
          sortedTasks = [...tasks].sort((a, b) => {
            console.log(importanceOrder[a.importance])
              return importanceOrder[a.importance] - importanceOrder[b.importance];
          });
      } else if (order === 'date') {
          sortedTasks = [...tasks].sort((a, b) => {
              return new Date(a.id) - new Date(b.id); // Adjust according to your date format
          });
      }
  
      setTasks(sortedTasks);
      setIsOpen(false);
  }

    return (
    <div>
        <button className={`todo-button`} onClick={() => toggleMenu()}>Sort By</button>
        {isOpen && (
            <div className="sortmenu">
              <ul>
                <li><button className="sort-button-inner" onClick={() => sortTasks('importance')}>Importance</button></li>
                <li><button className="sort-button-inner" onClick={() => sortTasks('date')}>Date Added</button></li>
              </ul>
            </div>
          )}
    </div>)
}

export default Sort