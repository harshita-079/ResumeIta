export const getProfile =async (req,res)=>{
  res.status(200).json({
    success: true,
    message:"profile Accessed",
    userId: req.user.id
  });
}