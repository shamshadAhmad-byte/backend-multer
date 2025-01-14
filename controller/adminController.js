import jwt from "jsonwebtoken";
import Information from "../models/information.js";
const adminController = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (email === process.env.EMAIL && password === process.env.PASSWORD) {
      const token = jwt.sign({ email, password }, process.env.JWT_SECRET, {});
      res.json({ success: true, token });
    } else {
      res.json({ success: false, message: "Invalid credentials" });
    }
  } catch (error) {
    res.json({ success: false, message: "Internal server Error" });
  }
};
const uploadsSingleImage = async (req, res) => {
  const { name } = req.body;
  const { filename } = req.file;
  try {
    const newInformation = new Information({
      name,
      image: [filename],
    });
    await newInformation.save();
    res.json({ success: true, message: "Image uploaded successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Internal server Error" });
  }
};
const uploadeMultipleImages = async (req, res) => {
  const { name } = req.body;
  try {
    const temp = [];
    for (let key in req.files) {
      temp.push(req.files[key][0].filename);
    }
    const newInformation = new Information({
      name,
      image: temp,
    });
    await newInformation.save();
    res.json({ success: true, message: "Images uploaded successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Internal server Error" });
  }
};
export { adminController, uploadsSingleImage, uploadeMultipleImages };
