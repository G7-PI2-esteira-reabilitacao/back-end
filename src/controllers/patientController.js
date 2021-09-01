const patientBase = require('../base/patientBase');

class patientController {
    async create(req, res) {

        try {
            req.body.activate = true;
            const feedback = await patientBase.create(req.body);
            return res.json(feedback);
        } catch (error) {
            return res.status(400).json({ message: error.message || error });
        }
    }

}

module.exports = new patientController();