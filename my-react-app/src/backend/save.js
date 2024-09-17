import { getDatabase, ref, set, push, remove } from 'firebase/database'

import cong from '../../public/configuration.jsx';

const save = async (tasks, username) => {
    if (!username) {
        return
    }
    const db = getDatabase(cong)
    const dbref = ref(db, 'Users/'+username+'/Tasks')
    await remove(dbref)
    tasks.forEach(task => {
        let dbpushref = push(ref(db,'Users/'+username+'/Tasks'))
        set(dbpushref, {
            id: task.id,
            name: task.name,
            completed: task.completed,
            importance: task.importance
        }).catch((e) => {
            console.log("Error:", e.message)
        })
        console.log(task)
    });
}

export default save