const Fisio = require('../models/fisioModel');


exports.getAllFisio = async (req,res) => {
    try {
        const fisios = await Fisio.find()
        res.status(200).json({
            status: "Sucesso",
            results: fisios.length,
            data: {
                fisios
            }
        })
    } catch (e) {
        res.status(400).json({
            status: "Erro"
        })
    }
}

exports.getOneFisio = async (req,res) => {
    try {
        const fisio = await Fisio.findById(req.params.id)
        res.status(200).json({
            status: "Sucesso",
            data: {
                fisio
            }
        })
    } catch (e) {
        res.status(400).json({
            status: "Erro"
        })
    }
}

exports.createFisio = async (req,res) => {
    try {
        const fisio = await Fisio.create(req.body)
        res.status(200).json({
            status: "Sucesso",
            data: {
                fisio
            }
        })
    } catch (e) {
        res.status(400).json({
            status: "Erro"
        })
    }
}

exports.updateFisio = async (req,res) => {
    try {
        const fisio = await Fisio.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        res.status(200).json({
            status: "Sucesso",
            data: {
                fisio
            }
        })
    } catch (e) {
        res.status(400).json({
            status: "Erro"
        })
    }
}

exports.deleteFisio = async (req,res) => {
    try {
        const fisio = await Fisio.findByIdAndDelete(req.params.id)
        res.status(200).json({
            status: "Sucesso"
        })
    } catch (e) {
        res.status(400).json({
            status: "Erro"
        })
    }
}