const { Router } = require('express');

const patientRoutes = require('./patientRoutes');
const fisioRoutes = require('./fisioRoutes');

const routes = Router();

// Facade

routes.use('/patient', patientRoutes);
routes.use('/fisio', fisioRoutes);

module.exports = routes;