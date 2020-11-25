# BugTracker
Is an API designed to track projects, allowing us to insert users, that can insert issues and comments.   

## Table of contents
* [General information](#general-information)
* [Setup](#Setup)
* [Technologies](#Technologies)
* [Example usage](#Example-usage)
* [Change log](#Change-log)
* [Roadmap](#Roadmap)
* [Author info](#Author-info)

## General information
This project is the result of the Cloud Base Web Application subject carried out in the semester 2020 in CCT College (Higher Diploma in Science in Computing) Dublin, Ireland. 

## Setup
* Clone the repository:  
git clone  `https://github.com/NazarethMaria/CBWA-CA1`

* Install NPM packages: 
`npm install`

* Execute: 
`$Env:MONGO_URI="mongo path"`
`npm run start:dev`

## Technologies
* Node - version 12.18.3.
* Nodemon - version 2.0.6.
* Body-parser - version 1.19.0.
* Express - version 4.17.1.
* MongoDB - version 3.6.2.
* Herocku - version 7.44.0.  

## Example usage
Those were the rutes used in the project:
* Get all projects - app.get("/projects", projectsController.getController);
* Get individual projects by slug - app.get("/projects/:slug", projectsController.getBySlug);
* Add new projects indivudually - app.post("/projects", projectsController.postController);
* Get all users - app.get("/users", usersController.getController);
* Get individual users by email - app.get("/users/:email", usersController.getByEmail);
* Add new users indivudually - app.post("/users", usersController.postController);
* Get all issues - app.get("/issues", issuesController.getController);
* Get individual issues by id - app.get("/issues/:id", issuesController.getById);
* Add new issues to a project individualy - app.post("/projects/:slug/issues", issuesController.postController);

## Change log 
The following are the feautures performed.
* CA Part 1 - add and get data (Created in Oct 2020)
  - Projects: 
    - Get all projects
    - Get individual project by slug
    - Add new projects individually
  - Users:
    - Get all users
    - Get individually user by email
    - Add new users individually
  - Issues:
    - Get all issues
    - Get individual issues by id
    - Add new issues to a project individually
      - Issues have comments
  - Creation of README.md

## Roadmap
A list of features that will be implemented:
* Checking error (Nov 2020) 
* Start working on your frontend (Nov 2020)
* Docker-ise the application (Nov 2020)

## Author info
Created by https://github.com/NazarethMaria - feel free to contact me! 
