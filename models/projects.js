const db = require('../db')();

module.exports = () => {
    const get = (id = null) => {
        console.log('    inside projects model');
        if(!id){
            return db.projects; 
        }

        return db.projects[parseInt(id) - 1];
    }
    
    const add = (slug, name, description) => {
        return db.projects.push({
            id: db.projects.length + 1,
            slug: slug,
            name: name,
            description: description
        });
    }
    
    return {
     get,
     add
    }
};
