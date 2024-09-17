import { getDatabase, ref, get } from 'firebase/database'

import cong from '../../public/configuration.jsx';

const checkpassword = async (user, password) => {
    const db = getDatabase(cong)
    let dbgetref = ref(db, 'Users/'+user)
    const snapshot = await get(dbgetref)
    console.log(user, password)
    if (snapshot.exists()) {
        const arr = snapshot.val()
        return arr.Password == password
    }
    return false
}

export default checkpassword