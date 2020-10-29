const projects = require('../models/projects.js')();

module.exports = () => {
    
    const getController = (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        return res.json(projects.get());
    }

    const getById = (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.json(projects.get(req.params.id));
    }
    
const postController = (req, res) => {
    const slug = req.body.slug;
    const name = req.body.name;
    const description = req.body.description;
    projects.add(slug, name, description);
    return res.end(`POST: ${slug, name, description}`);
}

//  req.on('data', chunk => {
//  body += chunk.toString(); // convert Buffer to string
//  });

//  req.on('end', () => {
//  let project = JSON.parse(body);
//  projects.add(project.name);
//  return res.end(`POST: ${project.name}`);
//  });
//  }
 
// const controller = (req, res) => {
//  if (req.method == 'GET') {
//  return getController(req, res);
//  } else if (req.method == 'POST') {
//  return postController(req, res);
//  } else {
//  res.statusCode = 405;
//  res.end(JSON.stringify({ error: "not implemented"}));
//  }
//  }
return {
    getController,
    postController,
    getById
 }
} 
