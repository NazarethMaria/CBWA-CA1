const db = require('../db')();
const COLLECTION = "comments";
// const objectId = require('mongodb').ObjectID

module.exports = () => {
    const get = async (issuesNumber = null) => {
        console.log(' inside comments model');
        if (!issuesNumber) {
            const comments = await db.get(COLLECTION);
            return comments;
        }
        
        const comment = await db.get(COLLECTION, {issuesNumber});
        return comment;
    }
    
const add = async (issuesNumber, text, author) => {
    const issueCount = await db.count(COLLECTION);
    const comments = await db.get('comments', {issuesNumber})
    const results = await db.add(COLLECTION, {
        issuesNumber:`${issuesNumber}-${issueCount  + 1}`,
        text: text,
        author: author,
        projectId:projects[0]._id,
    });
    
    return results.result;
}

return {
    get,
    add
}
}; 