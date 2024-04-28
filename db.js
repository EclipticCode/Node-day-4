const mongoose = require ('mongoose')
const myprocess = require("dotenv").config();

const mongoDB = myprocess.parsed.MONGO_DB

const connectDb =  async () => {
    await mongoose.connect(mongoDB);
    console.log(mongoose.connection.readyState)

    if(mongoose.connection.readyState == 1) {
     console.log("Connected to DB")
    } else {
     console.log("Connecting")
    }
}

module.exports = {
    mongoose ,
    connectDb
}