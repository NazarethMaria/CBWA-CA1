const db = require('../db')();
const COLLECTION = "issues";
const objectId = require('mongodb').ObjectID

module.exports = () => {
    const get = async (issuesNumber = null) => {
        console.log(' inside issues model');
        if (!issuesNumber) {
            const issues = await db.get(COLLECTION);
            return issues;
        }
        
        const issue = await db.get(COLLECTION, {issuesNumber});
        return issue;
    }
    
const add = async (slug, title, description, status) => {
    const issueCount = await db.count(COLLECTION);
    const projects = await db.get('projects', {slug})
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