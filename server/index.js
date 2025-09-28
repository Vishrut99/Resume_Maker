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
const allowedOrigins = [process.env.CLIENT_URL, 'http://localhost:5173'].filter(Boolean);
app.use(cors({
    origin: allowedOrigins,
    credentials: true,
}));

app.use(express.json());

//routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/data', resumeRoutes);

// basic health endpoint
app.get('/', (req, res) => {
    res.status(200).send('OK');
});

// api index endpoint for quick visibility
app.get('/api', (req, res) => {
    res.json({
        status: 'ok',
        message: 'Resume Builder API',
        routes: [
            { method: 'POST', path: '/api/auth/google-sign-in' },
            { method: 'GET', path: '/api/user/get-user/:id', auth: true },
            { method: 'PUT', path: '/api/user/update/:id', auth: true },
            { method: 'POST', path: '/api/user/feedback', auth: true },
            { method: 'POST', path: '/api/data/resume-data', auth: true },
            { method: 'GET', path: '/api/data/get-all-resume-data', auth: true },
        ],
    });
});

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
