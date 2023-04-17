const mongoose = require("mongoose");

mongoose.set('strictQuery', true);

//real data db connection
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_STRING);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

//fake data db connection
const connectFakeDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.FAKE_DB_STRING);
    console.log(`Fake MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = { connectDB, connectFakeDB };

/* Use separate db instances for fake data.

Use the appropriate connection when seeding your db with fake data or querying the real data in app.

Use connectFakeDB to connect to fake data database when generating fake data, and connectDB to connect to real data database when querying or modifying real data. Or, use different collection names for fake or real data, and use appropriate collection name when querying or modifying data

*/