const users = require('../models/users.js')();

module.exports = () => {

const getController = async (req, res) => {
    res.json(await users.get());
 }

const getByEmail = async (req, res) => {
    res.json(await users.get(req.params.email)); 
 }

const postController = async (req, res) => {
    const name = req.body.name;
    const email = req.body.email; 
    const usertype = req.body.usertype;
    const results = await users.add(name, email, usertype); 
    res.json(result); 
 }
 
return {
 getController,
 postController,
 getByEmail,
 }
}