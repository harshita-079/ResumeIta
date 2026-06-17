import Feedback from "../models/Feedback.js";

const createFeedback = async (req, res) => {
  try {
    const { userId, message ,rating} = req.body;

    if (!userId || !message || isNaN(rating)) {
      return res.status(400).json({ 
        error: "Missing required fields" 
       });
    }
    if(rating < 1 || rating > 5){
    return res.status(400).json({ 
        error: "Rating must be between 1 and 5" 
       });
    }

    const feedback = new Feedback({
      userId,
      message,
      rating
    });

    await feedback.save();

    res.status(201).json({ 
        message: "Feedback created successfully",
        feedback
    });

    
  } catch (error) {
    res.status(500).json({"error": "Server error"});
  }
};

export default createFeedback;