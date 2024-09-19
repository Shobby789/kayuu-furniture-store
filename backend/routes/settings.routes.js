const express = require("express");
const { SiteSettings, GetSiteSettings } = require("../controllers/settings.controller");
const router = express.Router();

router.post("/sitesettings", SiteSettings);
router.get("/getSiteSettings", GetSiteSettings)

module.exports = router