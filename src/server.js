const express = require('express');
const mongoose = require('mongoose');
const { MONGO_USER, MONGO_PASSWORD, MONGO_IP, MONGO_PORT } = require('./config/config');
const patientRoutes = require('./routes/patientRoutes');
const fisioRoutes = require('./routes/fisioRoutes');


const app = express();

//Database connection
const mongoURL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`

mongoose
    .connect(mongoURL)
    .then( () => console.log("succesfully connected to DB"))
    .catch( (e) => console.log(e))
    
app.use(express.json());

app.get("/", (req,res) => {
    res.send("<h2>Hi there!<h2>")
})
app.use("/patient", patientRoutes);
app.use("/fisio", fisioRoutes);



const port = process.env.PORT || 3333;

app.listen(port, () => console.log(`listening on port ${port}`));
