const mongoose = require("mongoose");

const internshipSchema = new mongoose.Schema(
    {
        company: {
            type: String,
            required: true,
            trim: true
        },

        role: {
            type: String,
            required: true,
            trim: true
        },

        location: {
            type: String,
            required: true,
            trim: true
        },

        applicationDate: {
            type: Date,
            required: true
        },

        status: {
            type: String,
            required: true,
            enum: [
                "Applied",
                "Interview",
                "Selected",
                "Rejected"
            ]
        },

        jobLink: {
            type: String,
            default: ""
        },

        notes: {
            type: String,
            default: ""
        }
    },

    {
        timestamps: true
    }
);

module.exports = mongoose.model(
    "Internship",
    internshipSchema
);