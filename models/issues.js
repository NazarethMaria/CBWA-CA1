const db = require('../db')();

module.exports = () => {
    const get = (id = null) => {
        console.log(' inside issues model');
        if(!id){
            return db.issues;
        }
        
        return db.issues[parseInt(id) - 1];
    }
    
    const add = (issuesNumber, title, description, projectId) => {
        return db.issues.push({
            id: db.issues.length + 1,
            issuesNumber: issuesNumber,
            title: title,
            description: description,
            projectId: projectId
        });
    }
    
    return {
        get,
        add
    }
};