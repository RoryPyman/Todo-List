import { useState } from "react";

const Sort = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    const sortTasks = (order) => {

    }

    return (
    <div>
        <button onClick={() => toggleMenu()}>Sort By</button>
        {isOpen && (
            <div className="menu">
              <ul>
                <li><button onClick={sortTasks('importance')}>Importance</button></li>
                <li><button onClick={sortTasks('date')}>Date Added</button></li>
              </ul>
            </div>
          )}
    </div>)
}

export default Sort