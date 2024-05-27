import express from "express";
import {
  createAdminData,
  getAdminData,
} from "../controllers/admin.controller.js";
const route = express.Router();


route.get("/getAdminData", getAdminData);
route.post("/createAdminData", createAdminData);

export default route;