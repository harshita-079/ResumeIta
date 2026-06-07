import Resume from "../models/Resume.js";

export const createResume = async (req, res) => {

    try {

        const resume = await Resume.create({

            userId: req.user.id,

            title: req.body.title,

            template: req.body.template,

            accentColor: req.body.accentColor,

            data: req.body.data

        });

        res.status(201).json({

            success: true,

            message: "Resume Created Successfully",

            resume

        });

    } catch (error) {

        console.log(error);

        res.status(500).json({

            success: false,

            message: "Server Error"

        });

    }

};

export const getAllResumes = async (req, res) => {

    try {

        const resumes = await Resume.find({

            userId: req.user.id

        });

        res.status(200).json({

            success: true,

            resumes

        });

    } catch (error) {

        console.log(error);

        res.status(500).json({

            success: false,

            message: "Server Error"

        });

    }

};

export const updateResume = async (req, res) => {

    try {

        const resume = await Resume.findOneAndUpdate(

            {
                _id: req.params.id,
                userId: req.user.id
            },

            req.body,

            {
                new: true
            }

        );

        if (!resume) {

            return res.status(404).json({

                success: false,
                message: "Resume not found"

            });

        }

        res.status(200).json({

            success: true,
            message: "Resume Updated Successfully",

            resume

        });

    } catch (error) {

        console.log(error);

        res.status(500).json({

            success: false,
            message: "Server Error"

        });

    }

};

export const getResumeById = async (req, res) => {

    try {

        const resume = await Resume.findOne({

            _id: req.params.id,

            userId: req.user.id

        });

        if (!resume) {

            return res.status(404).json({

                success: false,

                message: "Resume not found"

            });

        }

        res.status(200).json({

            success: true,

            resume

        });

    } catch (error) {

        console.log(error);

        res.status(500).json({

            success: false,

            message: "Server Error"

        });

    }

};