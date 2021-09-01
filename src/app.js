const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
// Database connection
mongoose.connect(
    'Test',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    },
    () => {
        logger.info('Successfully connected to database');
    },
);

const app = express();

app.use(express.json());
app.use(routes);
app.listen();

module.exports = app;