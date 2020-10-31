const db = require('../db')();
const COLLECTION = "users";

module.exports = () => {
    const get = async (email = null) => {
        console.log('    inside users model');
        if (!email) {
        const users = await db.get(COLLECTION);
        return users; 
    }
    const user = await db.get(COLLECTION, { email });
        return user;
}
    
    const add = async (name, email, usertype, key) => {
        const userCount = await db.count(COLLECTION);
        const results = await db.add(COLLECTION, {
            id: userCount + 1,
            name: name,
            email: email,
            usertype: usertype,
            key: key
        });
        return results.results;
    }
    
    return {
     get,
     add   
    }
};


