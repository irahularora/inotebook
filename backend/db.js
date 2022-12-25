const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://irahularora:mvIxH6SjIYE8vKzR@cluster0.nqrp5ng.mongodb.net/inotebook?retryWrites=true&w=majority"

const connectToMongo = () =>{
    mongoose.connect(mongoURI, () =>{
        console.log('connected to db')
    })
}

module.exports =connectToMongo