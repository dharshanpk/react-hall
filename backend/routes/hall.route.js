import { postHallDetails,getHallDetails } from "../controllers/hall.controller.js";
import express from "express"
import {upload} from "../config/multer.js";

const router=express.Router();


router.post("/posthalldetails", (req, res, next) => {
  console.log("Incoming content-type:", req.headers["content-type"]);
  next();
}, upload.single('image'), postHallDetails);

router.get('/gethalldetails',getHallDetails);
export default router;