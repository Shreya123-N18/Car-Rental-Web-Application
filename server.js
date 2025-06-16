const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
const connectDB = require('./db');

dotenv.config();

app.use(cors({
    origin: ['http://localhost:3000'],
    credentials: true
}));

app.use(express.json());

// Call the connection function
connectDB();

// Your routes here
app.use('/api/cars', require('./routes/carsRoute'));
app.use('/api/users', require('./routes/usersRoute'));
app.use('/api/bookings', require('./routes/bookingsRoute'));

// Serve static files in production (optional)
if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const port = process.env.PORT || 5000;
app.listen(port, () => console.log('Node JS Server Started on Port ${port}'));