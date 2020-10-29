const db = require('../db')();

module.exports = () => {
const get = (id = null) => {
 console.log(' inside comments model');
 if(!id){
 return db.comments;
 }

 return db.comments[parseInt(id) -1];
}

const add = (text, author) => {
 return db.comments.push({
 id: db.comments.length + 1,
 text: text,
 author: author,
 });
 }

return {
 get,
 add
 }
};