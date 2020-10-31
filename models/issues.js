const db = require('../db')();
const COLLECTION = "issues";

module.exports = () => {
    const get = async (id = null) => {
        console.log(' inside issues model');
        if (!id) {
            const issues = await db.get(COLLECTION);
            return issues;
        }
        
        return { error: "byId not implemented yet" }
    }
    
const add = async (issuesNumber, title, description, projectId) => {
    const issueCount = await db.count(COLLECTION);
    const results = await db.add(COLLECTION, {
        id: issueCount + 1,
        issuesNumber: issuesNumber,
        title: title,
        description: description,
        projectId: projectId
    });
    
    return results.result;
}

return {
    get,
    add
}
}; 