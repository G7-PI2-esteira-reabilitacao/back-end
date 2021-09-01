const fisioBase = require('../base/fisioBase');

class fisioController {
    async create(req, res) {

        try {
            req.body.activate = true;
            const feedback = await fisioBase.create(req.body);
            return res.json(feedback);
        } catch (error) {
            return res.status(400).json({ message: error.message || error });
        }
    }

}

module.exports = new fisioController();