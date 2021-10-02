const Session = require('../models/sessionModel');

exports.getAllSession = async (req,res) => {
    try {
        const sessions = await Session.find()
        res.status(200).json({
            status: "Sucesso",
            results: sessions.length,
            data: {
                sessions
            }
        })
    } catch (e) {
        res.status(400).json({
            status: "Erro"
        })
    }
}

exports.getOneSession = async (req,res) => {
    try {
        const session = await Session.findById(req.params.id)
        res.status(200).json({
            status: "Sucesso",
            data: {
                session
            }
        })
    } catch (e) {
        res.status(400).json({
            status: "Erro"
        })
    }
}

exports.createSession = async (req,res) => {
    try {
        const session = await Session.create(req.body)
        res.status(200).json({
            status: "Sucesso",
            data: {
                session
            }
        })
    } catch (e) {
        res.status(400).json({
            status: "Erro"
        })
    }
}

exports.updateSession = async (req,res) => {
    try {
        const session = await Session.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        res.status(200).json({
            status: "Sucesso",
            data: {
                session
            }
        })
    } catch (e) {
        res.status(400).json({
            status: "Erro"
        })
    }
}

exports.deleteSession = async (req,res) => {
    try {
        await Session.findByIdAndDelete(req.params.id)
        res.status(200).json({
            status: "Sucesso",
        })
    } catch (e) {
        res.status(400).json({
            status: "Erro"
        })
    }
}