const { Router } = require('express');

const patientRoutes = require('./patientRoutes');
// const fisioRoutes = require('./fisioRoutes');
const sessionRoutes = require('./sessionRoutes');

const routes = Router();

// Facade

routes.use('/patient', patientRoutes);
// routes.use('/fisio', fisioRoutes);
routes.use('/session', sessionRoutes);

module.exports = routes;