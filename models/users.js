const db = require('../db')();

module.exports = () => {
    const get = (email = null) => {
        console.log('    inside users model');
        if(!email){
            return db.users; 
        }

        return db.users[parseInt(email) - 1];
    }
    
    const add = (name, email, usertype) => {
        return db.users.push({
            id: db.users.length + 1,
            name: name,
            email: email,
            usertype: usertype
        });
    }
    
    return {
     get,
     add
    }
};


