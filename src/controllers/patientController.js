const Patient = require('../models/patientModel');

exports.getAllPatient = async (req,res) => {
    try {
        const patients = await Patient.find()
        res.status(200).json({
            status: "Sucesso",
            results: patients.length,
            data: {
                patients
            }
        })
    } catch (e) {
        res.status(400).json({
            status: "Erro"
        })
    }
}

exports.getOnePatient = async (req,res) => {
    try {
        const patient = await Patient.findById(req.params.id)
        res.status(200).json({
            status: "Sucesso",
            data: {
                patient
            }
        })
    } catch (e) {
        res.status(400).json({
            status: "Erro"
        })
    }
}

exports.createPatient = async (req,res) => {
    try {
        const patient = await Patient.create(req.body)
        res.status(200).json({
            status: "Sucesso",
            data: {
                patient
            }
        })
    } catch (e) {
        res.status(400).json({
            status: "Erro"
        })
    }
}

exports.updatePatient = async (req,res) => {
    try {
        const patient = await Patient.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        res.status(200).json({
            status: "Sucesso",
            data: {
                patient
            }
        })
    } catch (e) {
        res.status(400).json({
            status: "Erro"
        })
    }
}

exports.deletePatient = async (req,res) => {
    try {
        const patient = await Patient.findByIdAndDelete(req.params.id)
        res.status(200).json({
            status: "Sucesso",
        })
    } catch (e) {
        res.status(400).json({
            status: "Erro"
        })
    }
}