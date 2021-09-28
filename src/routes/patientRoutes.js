const { Router } = require('express');
const patientController = require('../controllers/patientController');

const routes = Router();

routes
    .route("/")
    .get(patientController.getAllPatient)
    .post(patientController.createPatient)

routes
    .route("/:id")
    .get(patientController.getOnePatient)
    .patch(patientController.updatePatient)
    .delete(patientController.deletePatient)

module.exports = routes;