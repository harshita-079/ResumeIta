import express from "express";

import authMiddleware from "../middleware/authMiddleware.js";

import {createResume , getAllResumes , getResumeById, updateResume ,deleteResume} from "../controllers/resumeController.js";
import Resume from "../models/Resume.js";

const router = express.Router();

router.post("/create",authMiddleware,createResume);

router.get("/",authMiddleware,getAllResumes);

router.put("/:id",authMiddleware,updateResume);

router.get('/:id',authMiddleware,getResumeById);

router.delete('/:id',authMiddleware,deleteResume);

export default router;