const express = require("express");
const bodyParser = require("body-parser");

const hostname = "0.0.0.0";
const port = process.env.PORT || 3000;

const projectsController = require("./controller/projects")();
const usersController = require("./controller/users")();
const issuesController = require("./controller/issues")();
const commentsController = require("./controller/comments")();

const app = (module.exports = express());

// logging
app.use((req, res, next) => {
// Display log for requests
console.log("[%s] %s -- %s", new Date(), req.method, req.url);
next();
});

app.use(bodyParser.json());

// --- Get all projects 
app.get("/projects", projectsController.getController);
// --- Get individual projects 
app.get("/projects/:id", projectsController.getById);
// --- Add new projects indivudually 
app.post("/projects", projectsController.postController);

// --- Get all users
app.get("/users", usersController.getController);
// --- Get individual users  
app.get("/users/:email", usersController.getByEmail); // no me busca por email,  sale respuesta = 1 
// --- Add new users indivudually 
app.post("/users", usersController.postController); 


// EXAMPLE HERE --> ISSUES <-- 
// --- Get all issues
app.get("/issues", issuesController.getController);
// --- Get individual issues 
app.get("/issues/:id", issuesController.getById);
// --- Get all issues for a project ------------
// app.get("/issues/populated", issuesController.populatedController);
// --- BONUS: update the status of an issues ?????????
// --- Add new issues to a project individualy -----------
app.post("/issues", projectsController.postController); // solo de da id y description 

// --- Issues have comments ---
// --- Get all comments for an issues ----
app.get("/comments", commentsController.getController);
// --- Get individual comments for an issues ----
app.get("/comments/:id", commentsController.getById);
// --- Add new comments to an issue ----
app.post("/comments", commentsController.postController);


app.listen(port, hostname, () => {
console.log(`Server running at http://${hostname}:${port}/`);
});

// 404
app.use((req, res) => {
res.status(404).json({
 error: 404,
 message: "Route not found",
 });
});
