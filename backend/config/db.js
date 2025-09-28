const mongoose = require('mongoose');

function connectToDb() {
  const MONGO_URI = process.env.DB_CONNECT;

  console.log('🌐 Connecting to MongoDB URI:', MONGO_URI); // for debug

  mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => console.log("✅ Connected to DB"))
    .catch(err => console.error("❌ DB connection error:", err));
}

module.exports = connectToDb;
