const users = require('../models/users.js')();

module.exports = () => {

const getController = (req, res) => {
 res.setHeader('Content-Type', 'application/json');
 return res.json(users.get());
 }

const getByEmail = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.json(users.get(req.params.email)); 
 }

const postController = (req, res) => {
    const name = req.body.name;
    const email = req.body.email; 
    const usertype = req.body.usertype; 
    users.add(name, email, usertype);
    return res.end(`POST: ${name, email, usertype}`);
 }
 
return {
 getController,
 postController,
 getByEmail,
 }
}