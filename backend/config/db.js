const mongoose = require('mongoose');

function connectToDb() {
  const MONGO_URI = process.env.DB_CONNECT || "mongodb://127.0.0.1:27017/men-drive";

  mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to DB"))
    .catch(err => console.error("DB connection error:", err));
}

module.exports = connectToDb;
