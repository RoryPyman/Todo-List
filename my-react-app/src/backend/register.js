import { getDatabase, ref, set, push, get } from 'firebase/database'

import cong from '../../public/configuration.jsx';


const register = async (user, password) => {
    const db = getDatabase(cong)

    const userInDatabase = async () => {
        const dbgetref = ref(db, 'Users/');
        const snapshot = await get(dbgetref);

        if (snapshot.exists()) {
            const users = snapshot.val();

            // Iterate through the user data to check for existing username
            for (const key in users) {
                if (key === user) {
                    return true;  // User already exists
                }
            }
        }
        return false;  // User not found
    };
    console.log("2")
    if (await userInDatabase()) {
        return false
    }
    const dbpushref = push(ref(db, 'Users/'+user))
    return set(dbpushref, {
        Password: password
    }).then( () => {
        console.log("3")
        return true 
    }
    ).catch( (e) => { 
        console.log(e.message)
        return false
    }
    )

}

export default register