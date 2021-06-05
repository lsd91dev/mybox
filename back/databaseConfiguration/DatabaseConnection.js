const mongoose = require('mongoose');


const connectToDB = async () => { 
    await mongoose.connect( process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
    })
}

module.exports = connectToDB;