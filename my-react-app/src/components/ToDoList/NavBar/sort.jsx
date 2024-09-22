import { useState } from "react";
import "./index.css"

const Sort = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    const sortTasks = (order) => {
      setIsOpen(false)
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