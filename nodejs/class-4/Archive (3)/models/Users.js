const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")
const config = require("../config/jwt")
const { secret } = config

const UserSchema = new Schema({
  name: {
    type: String,
    minlength: 3,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  tokens: {
    type: Array,
    default: []
  }
})
                                            //req.body
UserSchema.methods.comparePassword = function (password) {
  const user = this; //Mongodb wala

                            //decoded, encoded
  return bcryptjs.compareSync(password, user.password);
}

UserSchema.methods.generateToken = function () {
  //jab particular instance per kam karwana ho.
  const user = this;
  const { _id } = user;
  const token = jwt.sign({ _id }, secret)

  //token = 123421982497 //MAC Token
  //token = 343291ru8174 //Mobile Token
  user.tokens.push(token)
  return user.save().then(() => token)
}

//logout
UserSchema.statics.removeToken = function (token) {
  const User = this;
  decoded = jwt.verify(token, secret)

  //get query document
  //document.token fulan index
  //db.collection('users').doc(decoded._id).set({ tokens:  }, { merge: true })

  return User.findOneAndUpdate({ _id: decoded._id }, { $pull: { tokens: token } })
}

//methods vs statics
/*
  methods: jab particular instance/data ki information, ap ke pas ho
  aur usper kaam karwana ho

  statics: jab particular instance/data ki information, ap ke pas naa ho,
  aur usper kaam bhi karwnana ho!
*/

//User creation se pehle chalega
UserSchema.pre("save", function(next) {
  const user = this

  if (user.isModified('password')) {
    const salt = bcryptjs.genSaltSync(10)
    const hash = bcryptjs.hashSync(user.password, salt)

    user.password = hash
  }

  next()
})

const Users = mongoose.model('Users', UserSchema)

module.exports = Users
