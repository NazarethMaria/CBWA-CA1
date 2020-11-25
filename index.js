const express = require("express");
const bodyParser = require("body-parser");

const hostname = "0.0.0.0";
const port = process.env.PORT || 3000;

const projectsController = require("./controller/projects")();
const usersController = require("./controller/users")();
const issuesController = require("./controller/issues")();
//const commentsController = require("./controller/comments")();

const users = require("./models/users")();

const app = (module.exports = express());

// logging
app.use((req, res, next) => {
    // Display log for requests
    console.log("[%s] %s -- %s", new Date(), req.method, req.url);
    next();
});

app.use(async (req, res, next) => {
    return next()
    const FailedAuthMessage = {
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401
        error: "Failed Authentication",
        message: "Go away!",
        code: "xxx", // Some useful error code
    };
    const suppliedKey = req.headers["x-api-key"];
    const clientIp = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
    // Check Pre-shared key
    if (!suppliedKey) {
        console.log(
            " [%s] FAILED AUTHENTICATION -- %s, No Key Supplied",
            new Date(), clientIp);
        FailedAuthMessage.code = "01";
        return res.status(401).json(FailedAuthMessage);
    }
    const user = await users.getByKey(suppliedKey);
    if (!user) {
        console.log(
            " [%s] FAILED AUTHENTICATION -- %s, BAD Key Supplied",
            new Date(),
            clientIp
        );
        FailedAuthMessage.code = "02";
        return res.status(401).json(FailedAuthMessage);
    }
    next();
});


app.use(bodyParser.json());

const path = require ('path');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs'); 

const PROJECTS = require('./models/projects')();
app.get('/', async (req, res) => {
    const { projectsList } = await PROJECTS.get();
    res.render('index', {
        title: 'BugTracker',
        heading: 'Welcome to your BugTracker',
        text: 'The following are the projects you will find in this app.',
        projects: projectsList,  
    });
});

// --- Get all projects 
app.get("/projects", projectsController.getController);
// --- Get individual projects by slug
app.get("/projects/:slug", projectsController.getBySlug);
// --- Add new projects indivudually 
app.post("/projects", projectsController.postController);

// --- Get all users 
app.get("/users", usersController.getController);
// --- Get individual users by email
app.get("/users/:email", usersController.getByEmail);
// --- Add new users indivudually 
app.post("/users", usersController.postController);


// --- Get all issues
app.get("/issues", issuesController.getController);
// --- Get individual issues by id
app.get("/issues/:id", issuesController.getById);
// --- Add new issues to a project individualy 
app.post("/projects/:slug/issues", issuesController.postController);

// --- Issues have comments ---
// --- Get all comments for an issues ----
// app.get("/comments", commentsController.getController);
// // --- Get individual comments for an issues ----
// app.get("/comments/:id", commentsController.getById);
// // --- Add new comments to an issue ----
// app.post("/comments", commentsController.postController);


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
