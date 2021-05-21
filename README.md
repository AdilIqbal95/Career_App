# Project: JobbaHunt
🔍 [![Netlify Status](https://api.netlify.com/api/v1/badges/a219f92e-0912-4232-808e-746b42373a08/deploy-status)](https://app.netlify.com/sites/jobbahunt/deploys) 🚀 ![Heroku](https://pyheroku-badge.herokuapp.com/?app=jobbahunt&style=flat) ⚖️ [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

JobbaHunt is a job search application built in full stack with react on the client, django REST framework API on the server and a postgreSQL datatbase. Users can create an account, search jobs on Reed API, save jobs, update progress of job applications. Interactions with the app allows the user to collect points that can be exchanged for rewards e.g. virtual coffees with CEOs, linkedIn connections, etc.

![JobbaHunt](https://user-images.githubusercontent.com/58271566/119194826-96485a80-ba7b-11eb-9fef-efdb83e4b007.gif)

## Description 
The the aim of JobbaHunt is to improve the job searching process which can be long, stressful and demotivating. We hope the casual language, emojis, and rewards will brighten up the process and motivate users to continue job hunting. 

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

It should load on: http://localhost:8080/

# Technologies
- HTML, CSS, Python, JavaScript, docker, SQL
- 
### Dependencies: 
   - Server: django, JWT, django REST framework
   
   - Client: react, router-dom, react-router-dom, bootstrap, react-bootstrap, sass, axios, jwt-decode, react-icons  

### DevDependencies:
   - Server: gunicorn, whitenoise, psycopg2
   
   - Client: necessary loaders, webpack, babel, jest, react testing library, dotenv-webpack

# Process 
1. Project Plan! Set up Gists, Source of Truth, project Kanban board and use MosCow method for prioritisation  
2. Design and layout plan! MoqUps, dbDiagram, idea proposal slide deck  
3. Set up file structure for the decided tech stack - django and react  
4. Decided to focus on sustainable developement by setting realistic goals in daily stand ups 
5. Set up ticket system with estimated completion timeframes
6. Prepare for deployment! And deploy! Deploy daily to welcome new changes! 
5. Mob/pair programming to collaborate and we had an open call available all day  

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
8. Add authentication and hide content for users that aren't logged in 
9. Fetch from jobs API and from our Django API. Render data in correct components and pages  

## Bugs
- [x] issue with switch statement / nested switch routes not working. Solved with useRouteMatch
- [x] login/register path not rendering correctly. Solved with location.reload 
- [x] /register rendering login form. Solved by refactoring and creating new register page (but i think there could be an even better solution that requires less code lines) 
- [x] nav bar and side bar is protected from unauthed user, however main section content still shows upon logout. Solved with history.push to login and useState for style visibility change 
- [x] users and profile IDs not matching on back end
- [x] recursive functions error causing infinite requests to our django API. Solved by using useEffect 
- [x] nav bar moving the whole main container on hover
- [ ] users can add daily streak multiple times a day 
 
# Wins & Challenges

### Wins
- Having a solid plan from early and great communication between the team!
- Successfully deployed front end to Netlify and backend to Heroku
- Authentication between front and back end working smoothly 
- Effective use of useState to render updates dynamically   

### Challenges  
- Environment issues with python and setting up a virtual environment 
- Django deployment - lots of configs and trial and error to get it work   
- Posting files and images to API     
- Fetching from Reed API    
- Issues with migrations during deployment  

# Future Features
- Direct platform between employers and employees   
- Mail service for alerts and notifications (django mail)   
- Mobile application using react native   

# Slide Deck

https://www.canva.com/design/DAEfBpDPLZQ/GzCkC87sbsY2tRo8vjjX5g/view?utm_content=DAEfBpDPLZQ&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink

