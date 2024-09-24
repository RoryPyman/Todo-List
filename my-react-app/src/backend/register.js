import { getDatabase, ref, get } from 'firebase/database'

import cong from '../../public/configuration.jsx';

export const userInDatabase = async (user) => {
    const db = getDatabase(cong)
    const dbgetref = ref(db, 'Users/');
    const snapshot = await get(dbgetref);
    console.log("HI")

    if (snapshot.exists()) {
        const users = snapshot.val();
        console.log(users)

        // Iterate through the user data to check for existing username
        for (const key in users) {
            console.log(key)
            if (key === user) {
                return true;  // User already exists
            }
        }
    }
    console.log("hello")
    return false;  // User not found
};
