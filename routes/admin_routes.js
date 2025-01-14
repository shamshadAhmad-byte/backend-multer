import { Router } from "express";
import {
  adminController,
  uploadeMultipleImages,
  uploadsSingleImage,
} from "../controller/adminController.js";
import authorAdmin from "../middleware/authorAdmin.js";
import uploads from "../middleware/multer.js";

const adminRoute = Router();
adminRoute.post("/login", adminController);
adminRoute.post(
  "/upload/single",
  authorAdmin,
  uploads.single("image"),
  uploadsSingleImage
);
adminRoute.post(
  "/upload/multiple",
  authorAdmin,
  uploads.fields([
    { name: "fname1", maxCount: 1 },
    { name: "fname2", maxCount: 1 },
  ]),
  uploadeMultipleImages
);
export default adminRoute;
