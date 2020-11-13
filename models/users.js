const db = require('../db')();
const COLLECTION = "users";

module.exports = () => {

    const getByKey = async (key) => {
        if (!key) {
            console.log(" 01: Missing key");
            return null;
        }

        try {
            const users = await db.get(COLLECTION, {
                key
            });

            if (users.length !== 1) {
                console.log(" 02: Bad key");
                return null;
            }
            return users[0];
        } catch (ex) {
            console.log("Exception users::getByKey")
            return null
        }
    };

    const get = async (email = null) => {
        console.log('    inside users model');
        if (!email) {

            try {
                const users = await db.get(COLLECTION);
                return {
                    usersList: users
                };
            } catch (ex) {
                console.log("users get error")
                return {
                    error: ex
                }
            }
        }
        try {
            const user = await db.get(COLLECTION, {
                email
            });
            return {
                usersList: user
            };
        } catch (ex) {
            return {
                error: ex
            }
        }
    };

    const add = async (name, email, usertype, key) => {
        if (!name || !email || !usertype || !key) {
            return {
                error: "You must fill all the fields , check them again"
            }
        }
        const checkUser = await db.get(COLLECTION, {
            email
        });
        if (checkUser.length === 0) {
            const userCount = await db.count(COLLECTION);
            const results = await db.add(COLLECTION, {
                id: userCount + 1,
                name: name,
                email: email,
                usertype: usertype,
                key: key
            });
            return results.result;
        } else {
            return {
                error: "This email already exist, try another "
            }
        }
    }

    return {
        get,
        add,
        getByKey
    }
};


