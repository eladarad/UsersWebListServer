import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

const authMiddleware = (req, res, next) => {
  const authorizationHeader = req.header("Authorization");
  if (!authorizationHeader) {
    return res.status(401).json({ message: "No token provided" });
  }

  const token = authorizationHeader.replace("Bearer ", "");
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
    
  }
};

export default authMiddleware;
