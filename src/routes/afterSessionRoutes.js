const { Router } = require('express');
const afterSessionController = require('../controllers/afterSessionController');

const routes = Router();

routes
    .route("/")
    .get(afterSessionController.getAllAfterSession)
    .post(afterSessionController.createAfterSession)

routes
    .route("/:id")
    .get(afterSessionController.getOneAfterSession)
    .patch(afterSessionController.updateAfterSession)
    .delete(afterSessionController.deleteAfterSession)

module.exports = routes;