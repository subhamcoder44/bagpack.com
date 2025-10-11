   const mongoose = require('mongoose');   // ✅ fixed typo: 'requrie' → 'require'

function dbConnect() {
  mongoose.connect(process.env.MONGO_URI, )
  .then(() => {
    console.log("✅ Database connected successfully");
  })
  .catch((err) => {
    console.error("❌ Database connection failed:", err.message);
  });
}

module.exports = dbConnect; 