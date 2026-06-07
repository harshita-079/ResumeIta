import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {

    try {

        const authHeader = req.header("Authorization");

        if (!authHeader) {

            return res.status(401).json({
                success: false,
                message: "Access Denied"
            });

        }

        const token = authHeader.startsWith("Bearer ")? authHeader.split(" ")[1]:authHeader;

        console.log("TOKEN:",token);

        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        console.log("DECODED:",decoded);
        req.user = decoded;

        next();

    } catch (error) {

        res.status(401).json({
            success: false,
            message: "Invalid Token"
        });

    }
    
};

export default authMiddleware;