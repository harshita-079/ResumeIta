import express from "express";
import multer from "multer";
import {
  analyzeResume,
  analyzePdfResume,
} from "../controllers/aiController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post("/analyze/:resumeId", authMiddleware, analyzeResume);
router.post(
  "/analyze-pdf",
  authMiddleware,
  upload.single("resume"),
  analyzePdfResume,
);

export default router;
