const issues = require('../models/issues.js')();

module.exports = () => {
    
    const getController = async (req, res) => {
        res.json(await issues.get());
    }

    const getById = (req, res) => {
        res.json({ error: "byId not implemented yet"});
    }

    // add new issues to a project individually 
 const postController = async (req, res) => {
     const issuesNumber = req.params.issuesNumber;
     const title = req.body.title;
     const description = req.body.description;
     const status = req.body.status;
     const result = await issues.add(issuesNumber, title, description, status);
     res.json(result); 
 }

return {
    getController,
    postController,
    getById
 }
} 

