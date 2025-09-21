const mongoose = require('mongoose');

function connectToDb() {
  const MONGO_URI = "mongodb://127.0.0.1:27017/men-drive"; // hardcoded

  mongoose.connect(MONGO_URI).then(() => 
    console.log(" Connected to DB"))
}

module.exports = connectToDb;

