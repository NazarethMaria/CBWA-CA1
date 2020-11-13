const db = require('../db')();
const COLLECTION = "issues";
const objectId = require('mongodb').ObjectID

module.exports = () => {

    const get = async (issuesNumber = null) => {
        console.log(' inside issues model');
        if (!issuesNumber) {

            try {
                const issues = await db.get(COLLECTION);
                return {
                    issuesList: issues
                };
            } catch (ex) {
                console.log("issues get error")
                return {
                    error: ex
                }
            }
        }
        try {
            const issue = await db.get(COLLECTION, {
                issuesNumber
            });
            return {
                issuesList: issues
            };
        } catch (ex) {
            return {
                error: ex
            }
        }
    };

    const add = async (slug, title, description, status) => {
        if (!title || !description || !staus) {
            return {
                error: "You must fill all the fields , check them again "
            }
        }
        const issueCount = await db.count(COLLECTION);
        const projects = await db.get('projects', {
            slug
        })
        const results = await db.add(COLLECTION, {
            issuesNumber: slug + "-" + (issueCount + 1),
            title: title,
            description: description,
            status: status,
            projectId: objectId(projects[0]._id),
            comments: [],
        });

        return results.result;
    }

    return {
        get,
        add
    }
}; 