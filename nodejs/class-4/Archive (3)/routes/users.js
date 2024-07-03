const express = require('express')
const router = express.Router()
const Users = require('../models/Users');

const mockData = [{
  id: 'hdn128h2819',
  name: 'Kashif'
}, {
  id: 'ncascd39y2',
  name: 'Fahim'
}]

// --> /users/all
router.get('/all', async (req, res) => {
  const users = await Users.find({}) //get all data from Users collection
  res.send(users)
})

router.get('/firstUser', (req, res) => {
  res.send(mockData[0])
})

//dynamic query param
router.get('/:id', async (req, res) => {
  const { id } = req.params
  // const user = await Users.find({ _id: id }) //return array
  const user = await Users.findOne({ _id: id }) //return object
  // const user = mockData.find(item => item.id === id)
  res.send(user)

})

//localhost:5000/users/add
router.post('/add', async (req, res) => {
  //data insert operation
  console.log('req', req.body)
  
  try {
    const user = new Users(req.body)

    const response = await user.save()
  
    res.send({ message: 'Data added successfully!', data: response })
  } catch (e) {
    res.send({ message: e })
  }  
})

router.delete('/remove/:id', (req, res) => {
  const { id } = req.params
  const index = mockData.findIndex(item => item.id === id)
  mockData.splice(index, 1)
  res.send({message: 'Deleted Successfully', data: mockData})
})

//user/login
router.post('/login', async (req, res) => {
  const { email, password } = req.body

  /*
    1. Check if user exist
    2. Compare passwords
    3. Generate Token
  */

  const user = await Users.findOne({ email })

  if (!user) {
    return res.send({ message: 'No user found. Please register!' })
  }

  const isAuthenticated = await user.comparePassword(password)

  if (!isAuthenticated) {
    return res.send({ message: 'Invalid credentials!' })
  }

  const token = await user.generateToken()

  res.send({ ...user, currentToken: token })
})

//logout
//Users.removeToken('dsakdhi8924y174')

module.exports = router
