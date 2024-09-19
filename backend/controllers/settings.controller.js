const mongooose = require("mongoose");
const SettingsModel = mongooose.model("SiteSettings");

module.exports.SiteSettings = async (req, res) => {
  try {
    const { sitename, supportemail } = req.body;
    await SettingsModel.create({
      sitename,
      supportemail,
    });
    return res.status(200).json({ message: "Settings updated" });
  } catch (error) {
    console.log("SiteSettings >> ", error);
    return res.status(500).json({ message: "Something went wrong", error });
  }
};

module.exports.GetSiteSettings = async (req, res) => {
  try {
    const settings = await SettingsModel.find();
    res.status(200).json({ message: "Site Settings", settings });
  } catch (error) {
    console.log("GetSiteSettings error >> ", error);
    return res.status(500).json({ message: "Internal server error", error });
  }
};
