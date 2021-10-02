const { Router } = require('express');
const sessionController = require('../controllers/sessionController');

const routes = Router();

routes
    .route("/")
    .get(sessionController.getAllSession)
    .post(sessionController.createSession)

routes
    .route("/:id")
    .get(sessionController.getOneSession)
    .patch(sessionController.updateSession)
    .delete(sessionController.deleteSession)

module.exports = routes;