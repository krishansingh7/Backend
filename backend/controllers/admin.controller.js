import AdminData from "../models/admin.model.js";

export const getAdminData = async (req, res) => {
  try {
    const userData = await AdminData.find();
    if (!userData) {
      return res.status(404).json({ msg: "Admin data not found" });
    }
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const createAdminData = async (req, res) => {
  try {
    const userData = new AdminData(req.body);
    if (!userData) {
      return res.status(404).json({ msg: "Admin data is not created" });
    }
    const savedData = await userData.save();
    res.status(200).json(savedData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
