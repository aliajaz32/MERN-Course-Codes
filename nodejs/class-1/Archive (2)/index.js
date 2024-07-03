// import express from 'express' --> ES6

const express = require('express') /* ---> ES5*/
const app = express()


app.listen(5000, () => {
  console.log('Listening to PORT 5000')
})

//path
app.use('/posts', (req, res) => {
  //Code: Get data from database
  const posts = [{
    "id": 1,
    "title": "Kanpein tang rahi hain",
    "body": "Kanpein tang rahi hain, Jab barish hoti to pani ata hai"
  }, {
    "id": 2,
    "title": "Kanpein tang rahi hain",
    "body": "Kanpein tang rahi hain, Jab barish hoti to pani ata hai"
  }, {
    "id": 3,
    "title": "Kanpein tang rahi hain",
    "body": "Kanpein tang rahi hain, Jab barish hoti to pani ata hai"
  }]
  
  res.send(posts)
  // return posts
})




/*

Nodejs

Ek framework hai!

1. Packaging Manager (npm) (Library)
- Node Packaging Manager
ek jaga jahan developers apni libraries upload karte hain.
Aur dosre developer usko use karte hain.

2. Create Backend APIs
API: Application Programmable Interface

CRUD operations:
Create
Read
Update
Delete
*/

/*
  1. Install Nodejs
  2. Verify Nodejs: node -v
  3. File/Folder structure
  - index.js
  - package.json
    i. Project ki basic info
    ii. Libraries listing
  4. Create package.json: npm init
  5. Install expressjs library
  - APIs routing
  Routing: Kisi specific path per koi khas kaam karwana


  Code Steps:
  1. Import express
  2. Listen to a server port Ta ke Dukan khuli rahe
  3. app.use is used to create routes
*/

/*
Realtime Nodejs libraries

  1. SocketIO
  2. GraphQL
*/