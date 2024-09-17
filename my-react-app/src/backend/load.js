import { getDatabase, ref, get } from 'firebase/database'

import cong from '../../public/configuration.jsx';


const load = async (user) => {
    const db = getDatabase(cong)
    let dbgetref = ref(db, 'Users/'+user+'/Tasks')
    const snapshot = await get(dbgetref)
    if (snapshot.exists()) {
        const arr = Object.values(snapshot.val())
        return arr
    } else {
        return []
    }
}
export default load