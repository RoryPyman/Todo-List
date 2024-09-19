import { getDatabase, ref, get } from 'firebase/database'

import cong from '../../public/configuration.jsx';

const checkpassword = async (user, password) => {
    const db = getDatabase(cong)
    let dbgetref = ref(db, 'Users/'+user)
    const snapshot = await get(dbgetref)
    if (snapshot.exists()) {
        const arr = Object.values(snapshot.val())
        return arr[0].Password == password
    }
    return false
}

export default checkpassword