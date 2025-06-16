const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

function connectDB() {
    mongoose.connect(process.env.MONGO_URL, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    });

    const connection = mongoose.connection;

    connection.on('connected', () => {
        console.log('MongoDB Connection Successful');
    });

    connection.on('error', (err) => {
        console.error('MongoDB Connection Error:', err);
    });
}

module.exports = connectDB;