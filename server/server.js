//dotenv
require ('dotenv').config();
//connect DB
const {connectDB} = require('./config/db');

connectDB();
const express = require('express');
const cors = require('cors');

//Import Routes
const authRoute = require('./routes/authRoute');
const postRoute = require('./routes/postRoute');

const { register } = require('./controllers/authController');

const app = express();

//cors
app.use(cors());

//body parser
app.use(express.json());

//Mount the route
app.use('/api/v1/auth',authRoute);
app.use('/api/v1/posts',postRoute);


const port = process.env.APP_PORT;

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})