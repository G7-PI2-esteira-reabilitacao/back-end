const { Router } = require('express');

const patientRoutes = require('./patientRoutes');
// const fisioRoutes = require('./fisioRoutes');
const sessionRoutes = require('./sessionRoutes');
const afterSessionRoutes = require('./afterSessionRoutes');

const routes = Router();

routes.use('/patient', patientRoutes);
// routes.use('/fisio', fisioRoutes);
routes.use('/session', sessionRoutes);
routes.use('/aftersession', afterSessionRoutes);

module.exports = routes;