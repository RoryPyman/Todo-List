import { getDatabase, ref, set, push } from 'firebase/database'

import cong from '../../public/configuration.jsx';

const save = async (tasks) => {
    const db = getDatabase(cong)
    tasks.forEach(task => {
        //if (!inDatabase(task, old_arr)){
        let dbpushref = push(ref(db, 'Users/RoryPyman/Tasks/'))
        set(dbpushref, {
            id: task.id,
            name: task.text,
            completed: task.completed,
            importance: task.importance
        }).catch((e) => {
            console.log("Error:", e.message)
        })
    //}
    });
}

export default save