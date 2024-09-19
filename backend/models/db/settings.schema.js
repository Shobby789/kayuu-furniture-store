const mongoose = require("mongoose");

const SettingsSchema = new mongoose.Schema(
  {
    sitename: { type: String },
    supportemail: { type: String },
  },
  {
    collection: "SiteSettings",
  }
);

mongoose.model("SiteSettings", SettingsSchema)