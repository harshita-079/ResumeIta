import createFeedback from "../controllers/feedbackController.js";
import express from "express";

const router = express.Router();

router.post("/", createFeedback);

export default router;