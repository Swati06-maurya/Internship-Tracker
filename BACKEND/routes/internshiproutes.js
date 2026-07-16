const express = require("express");
const router = express.Router();

const Internship = require("../models/Internship");

// GET ALL INTERNSHIPS
router.get("/", async (req, res) => {
    try {
        const internships = await Internship.find();
        res.json(internships);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

// ADD INTERNSHIP

router.post("/", async (req, res) => {
    try {
        const internship = new Internship(req.body);
        const savedInternship = await internship.save();
        res.status(201).json(savedInternship);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
});

// UPDATE INTERNSHIP

router.put("/:id", async (req, res) => {
    try {
        const updatedInternship =
            await Internship.findByIdAndUpdate(
                req.params.id,
                req.body,
                {
                    new: true,
                    runValidators: true
                }
            );
        res.json(updatedInternship);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
});

// DELETE INTERNSHIP

router.delete("/:id", async (req, res) => {
    try {
        await Internship.findByIdAndDelete(req.params.id);
        res.json({
            message: "Internship Deleted Successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

module.exports = router;