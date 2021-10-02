const express = require('express');
const mongoose = require('mongoose');
const { MONGO_USER, MONGO_PASSWORD, MONGO_IP, MONGO_PORT } = require('./config/config');
const routes = require('./routes');


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

// isso vai charmar o routes/index.js e la vai ter todas as rotas encapsuladas para aumentar a modularidade e diminuir a complexidade do codigo
app.use(routes); 



const port = process.env.PORT || 3333;

app.listen(port, () => console.log(`listening on port ${port}`));
