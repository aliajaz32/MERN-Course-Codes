const mongoose = require("mongoose")

const mongoURI = "mongodb+srv://kashif:kashif123@cluster0.fng3n.mongodb.net/exms14-node?retryWrites=true&w=majority";

// connect to mongodb
mongoose.connect(mongoURI, {useNewUrlParser: true})

module.exports = mongoose