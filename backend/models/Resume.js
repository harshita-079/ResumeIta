import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    title: {
        type: String,
        required: true
    },

    template: {
        type: String,
        default: "Modern Pro"
    },

    accentColor: {
        type: String,
        default: "#6366f1"
    },

    data: {
        type: Object, 
        default: {}
    }

}, {
    timestamps: true
});

const Resume = mongoose.model(
    "Resume",
    resumeSchema
);

export default Resume;