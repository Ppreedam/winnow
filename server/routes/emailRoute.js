import express from "express";
import { addEmail, GetEmails } from "../controllers/authController.js";

//router object
const router = express.Router();
//email add
router.post("/add-email", addEmail);
//email get
router.get("/get-email", GetEmails);
export default router;
