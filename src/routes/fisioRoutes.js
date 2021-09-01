const { Router } = require('express');
const routes = Router();
const fisioController = require('../controllers/fisioController');

routes.post('/', fisioController.create);
routes.get('/', fisioController.listAll);

module.exports = routes;