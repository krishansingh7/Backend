import express from "express";

import {
  submitForm,
  getData,
  getFilteredData,
  getRequest,
} from "../controllers/form.controller.js";

const router = express.Router();

router.post("/submit", submitForm);
router.get("/getData", getData);
router.post("/getRequest", getRequest);
router.post("/getFilteredData", getFilteredData);

export default router;