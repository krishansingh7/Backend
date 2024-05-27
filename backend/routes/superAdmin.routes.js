
import express from "express";
const router = express.Router();

import {
  getAllAdminData,
  getOneAdminData,
  updateOneAdminData,
  deleteOneAdminData,
  getFilteredAdminData,
} from "../controllers/superAdmin.controller.js";


// route.post("/getRequest", getRequest);

router.get("/getAllAdminData", getAllAdminData);
router.get("/getOneAdminData/:id", getOneAdminData);
router.post("/getFilteredAdminData", getFilteredAdminData);
router.put("/updateOneAdminData/:id", updateOneAdminData);
router.delete("/deleteOneAdminData/:id", deleteOneAdminData);

export default router;