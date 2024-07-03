const express = require('express')
const app = express()
const db = require('./config/db')

db.connection.once('open', () => {
  console.log('db connected')
})
.on('error', (err) => {
  console.log('err in connecting Mongodb: ', err)
})

app.listen(process.env.PORT || 5000, () => {
  console.log('Listening to port: 3000 kesa hai!')
})

app.use(express.json())

app.use('/', require('./routes')) // --> pointing to index.js

/*
DEPLOYMENT STEPS:
To save the time, could everyone try deploying the BE projecto n heroku themselves before the class by following this:

https://devcenter.heroku.com/articles/deploying-nodejs

Steps:
1. Signup to heroku
2. Add "engines": {
    "node": "14.x"
  } in package.json
3. Add /node_modules
npm-debug.log
.DS_Store
/*.env in .gitignore

open terminal:
4. npm install -g heroku
5. heroku login
6. https://devcenter.heroku.com/articles/deploying-nodejs#deploy-your-application-to-heroku
*/

/*

Way to MONGODB till Studio3T

1. Logged in to cloud.mongodb.com
2. Basic setup
3. Create Cluster
4. Click on BROWSE COLLECTIONS
5. Create collection by ADD MY OWN DATA under collections tab
6. Connect it with Studio3T
7. Go to Mongodb dashboard, click on Connect, Click on second option, copy the url
8. Studio3T -> new connection -> from URL -> URL paste -> apply -> connection open

Mongdb connection to Nodejs
1. npm i mongoose
2. db configuration (config/db.js)
3. Create Modals (Schema: Structure)
*/

/*
 1. Password expose
 2. 
*/

/*
 Types of APIs in terms of security
 1. Public
 2. Private/Protected
*/

/*
Todo
Authorization & Protected APIs

1. npm i bcryptjs jsonwebtoken
  i: bcryptjs (Password encryption)
  ii: jsonwebtoken (jwt: Token generation)
2. jwt secret (config/jwt.js)
3. add methods in models
 i. comparePassword
 ii. generateToken
 iii. removeToken
 iv. pre('save')
4. create register and login routes
5. create middleware verifyToken



A. Registration -> Password Encryption
B. Login -> Generate Token
C. Protected APIs -> Verify Token
*/