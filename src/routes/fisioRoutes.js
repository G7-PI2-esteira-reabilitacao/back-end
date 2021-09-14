const express = require('express');
const fisioController = require('../controllers/fisioController');

const routes = express.Router();

routes
    .route("/")
    .get(fisioController.getAllFisio)
    .post(fisioController.createFisio)

routes
    .route("/:id")
    .get(fisioController.getOneFisio)
    .patch(fisioController.updateFisio)
    .delete(fisioController.deleteFisio)
    
module.exports = routes;