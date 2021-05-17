# Project: JobbaHunt

## Description 
A fullstack project....

# Installation and Usage
- Clone or download this repo  

- Navigate to root directory of this repository and open the terminal   

To start up our server:     
`pipenv shell`   
`pipenv install`   
`cd django`   
`python manage.py runserver`   

It should load on: http://127.0.0.1:8000/

To start up our client:   
`cd react-client`   
`npm install`     
`npm run dev`    

# Technologies
- HTML, CSS, Python, JavaScript   
### Dependencies: 
   - Server: django
   
   - Client: react, router-dom, react-router-dom, bootstrap, sass

### DevDependencies:
   - Server: 
   
   - Client: necessary loaders, webpack, babel
# Process 
1. Project Plan! Set up Gists, Source of Truth, project Kanban board  
2. Design and layout plan! MoqUps, dbDiagram, idea proposal slide deck 
3. Set up file structure for the decided tech stack - django and react
4. Prepare for deployment! And deploy!

## Changelog
### Django-API
1. Install django - start project 'careers' and create app for 'users'   

### React-Client
1. Set up react file structure.   
2. Install dependencies and devdependencies   
3. Add components: Profile, SearchBar, Sidebar and new Pages within /home and a landing page at /   
4. Set up routing, nested routes and 404 routes   
5. Landing page login/register form  
6. Start stubbing out components and elements for each page  
7. Install test devdepencies and add setup for test suite

## Bugs
- [x] issue with switch statement / nested switch routes not working. Solved with useRouteMatch
- [x] login/register path not rendering correctly. Solved with location.reload 
- [x] /register rendering login form. Solved by refactoring and creating new register page (but i think there could be an even better solution that requires less code lines) 

# Wins & Challenges

### Wins
- Having a solid plan from early and great communication between the team!
- Successfully deployed front end to Netlify and backend to Heroku
### Challenges
- Environment issues with python and setting up a virtual environment 