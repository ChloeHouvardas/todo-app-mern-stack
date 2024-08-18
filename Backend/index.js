// import express into our index.js
import express from "express";

import todosRoute from "./routes/ToDoRoutes.js";

import cors from 'cors';

// Create our applications server
const app = express();

// Middleware for parsing request body 
app.use(express.json());

app.use(cors());

// function to listen to our port
// Includes callback function to ensure our port is working correctly
import { PORT } from "./config.js";



app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send("Hello World")
});

// tells our app to use the todos router whenever a request's path starts with /api/todos
app.use('/api/todos', todosRoute);

// Import mongo data base url from config file
import {mongoDbURL} from "./config.js";

import mongoose from 'mongoose';

// Connect to the database
mongoose.connect(mongoDbURL)
    .then(() => {
        console.log('App connected to the database')
        app.listen(PORT, () => {
            console.log(`App is listening to the port: ${PORT}`);
        })
    })
    .catch((error) => {
        console.log(error)
    });
