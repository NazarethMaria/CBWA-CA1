const uri = process.env.MONGO_URI;
const MongoClient = require('mongodb').MongoClient;
const DB_NAME = "BugTracker";
const MONGO_OPTIONS = { useUnifiedTopology: true, useNewUrlParser: true };

module.exports = () => {
    
    const count = (collectionName) => {
        return new Promise((resolve, reject) => {
            MongoClient.connect(uri, MONGO_OPTIONS, (err, client) => {
                const db = client.db(DB_NAME);
                const collection = db.collection(collectionName);
                
                collection.countDocuments({}, (err, docs) => {
                    resolve(docs);
                    client.close();
                });
            });
        });
    };
    
    const get = (collectionName) => {
        return new Promise((resolve, reject) => {
            MongoClient.connect(uri, MONGO_OPTIONS, (err, client) => {
                const db = client.db(DB_NAME);
                const collection = db.collection(collectionName);
                
                collection.find({}).toArray((err, docs) => {
                    resolve(docs);
                    client.close();
                });
            });
        });
    };
    
    const add = (collectionName, item) => {
        return new Promise((resolve, reject) => {
            MongoClient.connect(uri, MONGO_OPTIONS, (err, client) => {
                const db = client.db(DB_NAME);
                const collection = db.collection(collectionName);
                collection.insertOne(item, (err, result) => {
                    resolve(result);
                });
            });
        });
    };

    return {
        count, 
        get,
        add, 
    };
}; 


    // const users = [
    //     { id: 1, name: 'Nazareth Gutierrez', email: 'gtznazareth@gmail.com', usertype: 'admin' },
    //     { id: 2, name: 'Dave Albert', email: 'dalbert@cct.ie', usertype: 'user' }
    // ];
    
    // const projects = [
    //      { id: 1, slug: 'BOOK', name:'Ireland', description: 'project one'},
    //      { id: 2, slug: 'BUG', name:'Beetle', description: 'project two'}
    //  ];

    //  const issues = [  
    //     { id: 1, issuesNumber: "BOOK-1", title:'0912', description: 'testing issue', projectId: 1}, 
    //     { id: 2, issuesNumber: "BOOK-2", title:'3012', description: 'testing issue', projectId: 1},
    //     { id: 3, issuesNumber: "BUG-1", title:'0103', description: 'testing issue', projectId: 2}, 
    //     { id: 4, issuesNumber: "BUG-2", title:'2110', description: 'testing issue', projectId: 2} 
        
    // ];
        
    // const comments = [
    //     { id: 1, text: "proving", author: 1}, 
    //     { id: 2, text: "proving", author: 2},
    //     { id: 3, text: "testing", author: 1},
    //     { id: 4, text: "testing", author: 2},
    //     { id: 5, text: "checking", author: 1},
    //     { id: 6, text: "checking", author: 2},
    //     { id: 7, text: "testing out", author: 1}, 
    //     { id: 8, text: "testing out", author: 2}  
    // ];
     
    // return {
    //  projects,
    //  users,
    //  issues, 
    //  comments, 
    //  };
    // };


