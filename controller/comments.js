const comments = require('../models/comments.js')();

module.exports = () => {
    
    const getController = (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        return res.json(comments.get());
    }

    const getById = (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.json(comments.get(req.params.id));
    }

    // add new issues to a project individually 
 const postController = (req, res) => {
     const text = req.body.text;
     const author = req.body.author;
     comments.add(text, author);
     return res.end(`POST: ${text, author}`);
 } 

return {
    getController,
    postController,  
    getById
 }
} 