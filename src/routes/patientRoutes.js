const { Router } = require('express');
const routes = Router();
const patientController = require('../controllers/patientController');

routes.post('/', patientController.create);
routes.get('/', patientController.listAll);

module.exports = routes;