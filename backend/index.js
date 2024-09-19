const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT;
const { DBConnection } = require("./models/connection");
app.use(express.json());
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());
DBConnection();
// models
require("./models/db/product.schema");
require("./models/db/user.schema");
require("./models/db/order.schema");
require("./models/db/reviews.schema");
require("./models/db/settings.schema");
const mongoose = require("mongoose");
const ProductModal = mongoose.model("Products");
app.use("/uploads", express.static("./uploads"));

const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage });

// routes
app.use("/api", require("./routes/products"));
app.use("/api", require("./routes/auth"));
app.use("/api", require("./routes/orders"));
app.use("/api", require("./routes/reviews"));
app.use("/api", require("./routes/settings.routes"));

// add product api
app.post("/api/addProduct", upload.single("image"), async (req, res) => {
  const {
    title,
    price,
    stockStatus,
    availableQuantity,
    category,
    description,
  } = req.body;
  console.log("req.body");
  const findProduct = await ProductModal.findOne({ title });
  if (findProduct) {
    return res.json({ message: "This product has already been added." });
  }
  await ProductModal.create({
    title,
    price,
    stockStatus,
    availableQuantity,
    category,
    description,
    image: req.file.filename,
  });
  res.json({ message: "Product is added successfully." });
});

// listening server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
