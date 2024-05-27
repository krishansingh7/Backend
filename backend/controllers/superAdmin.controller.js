import AdminData from "../models/admin.model.js";

export const getAllAdminData = async (req, res) => {
  try {
    const userData = await AdminData.find();
    if (!userData) {
      return res
        .status(404)
        .json({ msg: "Admin data not found from super admin" });
    }
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const getOneAdminData = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await AdminData.findById(id);
    if (!userExist) {
      return res
        .status(404)
        .json({ msg: "Admin data not found from super admin" });
    }
    res.status(200).json(userExist);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const getFilteredAdminData = async (req, res) => {
  try {
    const {
      mozDA,
      categories,
      websiteLanguage,
      ahrefsDR,
      linkType,
      price,
      monthlyTraffic,
      mozSpamScore,
      publisherURL,
      publisherName,
      publisherEmail,
      publisherPhoneNo,
    } = req.body;

    const filter = {};

    // Construct filter based on conditions
    if (mozDA) filter.mozDA = { $gte: parseInt(mozDA) };
    if (categories)
      filter.categories = categories;
    if (websiteLanguage)
      filter.websiteLanguage = websiteLanguage;
    if (ahrefsDR) filter.ahrefsDR = { $gte: parseInt(ahrefsDR) };
    if (linkType) filter.linkType = linkType;
    if (price) filter.price = { $gte: parseInt(price) };
    if (monthlyTraffic)
      filter.monthlyTraffic = monthlyTraffic;
    if (mozSpamScore)
      filter.mozSpamScore = mozSpamScore;
    if (publisherURL) filter.publisherURL = publisherURL;
    if (publisherName) filter.publisherName = publisherName;
    if (publisherEmail) filter.publisherEmail = publisherEmail;
    if (publisherPhoneNo) filter.publisherPhoneNo = publisherPhoneNo;

    // Query the database with the constructed filter
    const users = await AdminData.find(filter);

    // Check each filter condition sequentially
    if (!users.length) {
      if (
        categories &&
        monthlyTraffic &&
        websiteLanguage &&
        linkType &&
        mozSpamScore
      ) {
        const categoryFilter = { categories };
        const monthlyTrafficFilter = { monthlyTraffic };
        const languageFilter = { websiteLanguage };
        const linkTypeFilter = { linkType };
        const mozSpamScoreFilter = { mozSpamScore };
        const data = await AdminData.find({
          categoryFilter,
          monthlyTrafficFilter,
          languageFilter,
          linkTypeFilter,
          mozSpamScoreFilter,
        });
        if (data.length) return res.json(data);
      }
    }

    // If no conditions match, return the initial filtered users or empty array
    res.json(users.length ? users : []);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};


export const updateOneAdminData = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await AdminData.findById(id);
    if (!userExist) {
      return res.status(401).json({ msg: "Admin not found" });
    }
    const updatedData = await AdminData.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updatedData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const deleteOneAdminData = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await AdminData.findById(id);
    if (!userExist) {
      res.status(500).json({ mes: "Admin not exist" });
    }
    await AdminData.findByIdAndDelete(id);
    res.status(200).json({ msg: "Admin deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
