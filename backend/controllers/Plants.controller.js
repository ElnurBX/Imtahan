
const { Plants } = require("../models/Plants.model")

const PlantsController = {
    getAll: async (req, res) => {
        try {
            const items = await Plants.find()
            res.send(items)
        } catch (error) {
            res.status(404).send(error)
        }
    },
    getById: async (req, res) => {
        try {
            const { id } = req.params
            const item = await Plants.findById(id)
            res.send(item)
        } catch (error) {
            res.status(404).send(error)
        }
    },
    add: async (req, res) => {
        try {
            const newPlants = new Plants({ ...req.body })
            await newPlants.save()
            const items = await Plants.find()
            res.send(items)
        } catch (error) {
            res.status(404).send(error)
        }
    },
    delete: async (req, res) => {
        try {
            const { id } = req.params
            await Plants.findByIdAndDelete(id)
            const items = await Plants.find()
            res.send(items)
        } catch (error) {
            res.status(404).send(error)
        }
    },
    edit: async (req, res) => {
        try {
            const { id } = req.params
            await Plants.findByIdAndUpdate(id, { ...req.body })
            const items = await Plants.find()
            res.send(items)
        } catch (error) {
            res.status(404).send(error)
        }
    }
}
module.exports = { PlantsController }
