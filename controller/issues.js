const issues = require('../models/issues.js')();

module.exports = () => {
    
    const getController = (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        return res.json(issues.get());
    }

    const getById = (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.json(issues.get(req.params.id));
    }

    // add new issues to a project individually 
 const postController = (req, res) => {
     const issuesNumber = req.body.issuesNumber;
     const title = req.body.title;
     const description = req.body.description;
     const projectId = req.body.projectId;
     projects.add(issuesNumber, title, description, projectId);
     return res.end(`POST: ${issuesNumber, title, description, projectId}`);
 }

return {
    getController,
    postController,
    getById
 }
} 

