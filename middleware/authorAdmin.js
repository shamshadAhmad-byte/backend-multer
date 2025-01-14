import jwt from "jsonwebtoken";
const authorAdmin = async (req, res, next) => {
  const { token } = req.headers;
  if (!token) {
    res.json({ success: false, message: "Token not found" });
  }
  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    if (
      decode.email === process.env.EMAIL &&
      decode.password === process.env.PASSWORD
    ) {
      next();
    }
  } catch (error) {
    res.json({ success: false, message: "Internal server error" });
  }
};
export default authorAdmin;
