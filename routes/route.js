import express from "express";

import {createData, updateData, deleteData, getData, getallData, getResData} from "../controllers/manager.js"
import Data from "../models/Data.js";
// import {verifyAdmin} from "../utils/verifyToken.js"
const router = express.Router();

//CREATE
router.post("/", createData);

// UPDATE
router.put("/:id", updateData);
// DELETE
router.delete("/:id", deleteData);
// GET

router.get("/find/:id", getData);
// GET ALL

router.get("/", getallData);
// Responsive
router.get("/res/", getResData);

export default router;
