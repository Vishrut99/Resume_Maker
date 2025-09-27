const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoDB = require('./config/db');
const authRoutes = require('./routes/auth.route');
const userRoutes = require('./routes/user.route');
const resumeRoutes = require('./routes/resume.route');

const app = express();

//dotenv config
dotenv.config();

//database config   
mongoDB();

//middlewares
const corsOptions = {
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());

//routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/data', resumeRoutes);

//middleware for logging
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

//error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});


const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
