const comments = require('../models/comments.js')();

module.exports = () => {
    
    const getController = async (req, res) => {
        res.json(await comments.get());
    }

    const getById = (req, res) => {
        res.json({ error: "byId not implemented yet"});
    }

    // add new issues to a project individually 
 const postController = async (req, res) => {
     const issuesNumber = req.params.issuesNumber;
     const text = req.body.text;
     const author = req.body.author;
     const status = req.body.status;
     const result = await comments.add(issuesNumber, text, author);
     res.json(result); 
 }

return {
    getController,
    postController,
    getById
 }
} 