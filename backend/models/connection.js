const mongoose = require("mongoose");
require("dotenv").config();
const DB_URL = process.env.DB_URL;

module.exports.DBConnection = () => {
  mongoose.connect(DB_URL);
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "DB connection error"));
  db.once("open", () => console.log("DB is connected"));
};
