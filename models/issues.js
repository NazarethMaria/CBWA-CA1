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
    
const add = async (issuesNumber, title, description, status) => {
    const issueCount = await db.count(COLLECTION);
    const projects = await db.get('projects', {slug:issuesNumber})
    console.log(projects)
    const results = await db.add(COLLECTION, {
        issuesNumber:`${issuesNumber}-${issueCount  + 1}`,
        title: title,
        description: description,
        status: status, 
        projectId:projects[0]._id,
    });
    
    return results.result;
}

return {
    get,
    add
}
}; 