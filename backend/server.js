require ('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const patientRoutes = require('./routes/patients')

//Create express app
const app = express();

//Global middleware
app.use(express.json());

//Fires for every request taht comes in
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

//routes
app.use('/api/patients', patientRoutes);

//connect to db
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    //Listen for requests once we have connected to the database
    app.listen(process.env.PORT, () => {
        console.log('Connected to db and listening on port', process.env.PORT);
    });
})
.catch((error) => {
    console.log(error);
});
