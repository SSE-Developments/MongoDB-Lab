const Supplement = require('../models/Supplement'); 


exports.getAllSupplements = async (req, res) => {
    try {
        const supplements = await Supplement.find();
        res.json(supplements);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


exports.getSupplementById = async (req, res) => {
    try {
        const supplement = await Supplement.findById(req.params.id);
        if (!supplement) return res.status(404).json({ message: 'Supplement not found' });
        res.json(supplement);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


exports.addSupplement = async (req, res) => {
    const supplement = new Supplement(req.body);
    try {
        const savedSupplement = await supplement.save();
        res.status(201).json(savedSupplement);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};


exports.deleteAllSupplements = async (req, res) => {
    try {
        await Supplement.deleteMany();
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


exports.deleteSupplementById = async (req, res) => {
    try {
        const supplement = await Supplement.findByIdAndDelete(req.params.id);
        if (!supplement) return res.status(404).json({ message: 'Supplement not found' });
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};