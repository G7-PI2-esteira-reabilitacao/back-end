const AfterSession = require('../models/afterSessionModel');

exports.getAllAfterSession = async (req,res) => {
    try {
        const afterSessions = await AfterSession.find()
        res.status(200).json({
            status: "Sucesso",
            results: afterSessions.length,
            data: {
                afterSessions
            }
        })
    } catch (e) {
        res.status(400).json({
            status: "Erro"
        })
    }
}

exports.getOneAfterSession = async (req,res) => {
    try {
        const afterSession = await AfterSession.findById(req.params.id)
        res.status(200).json({
            status: "Sucesso",
            data: {
                afterSession
            }
        })
    } catch (e) {
        res.status(400).json({
            status: "Erro"
        })
    }
}

exports.createAfterSession = async (req,res) => {
    try {
        const afterSession = await AfterSession.create(req.body)
        res.status(200).json({
            status: "Sucesso",
            data: {
                afterSession
            }
        })
    } catch (e) {
        res.status(400).json({
            status: "Erro"
        })
    }
}

exports.updateAfterSession = async (req,res) => {
    try {
        const afterSession = await AfterSession.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        res.status(200).json({
            status: "Sucesso",
            data: {
                afterSession
            }
        })
    } catch (e) {
        res.status(400).json({
            status: "Erro"
        })
    }
}

exports.deleteAfterSession = async (req,res) => {
    try {
        await AfterSession.findByIdAndDelete(req.params.id)
        res.status(200).json({
            status: "Sucesso",
        })
    } catch (e) {
        res.status(400).json({
            status: "Erro"
        })
    }
}