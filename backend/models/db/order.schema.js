const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    customerEmail: { type: String, required: true },
    products: { type: Array, required: true },
    userId: { type: String, required: true },
    firstname: { type: String, required: true },
    phonenumber: { type: String, required: true },
    lastname: { type: String, required: true },
    companyname: { type: String, required: true },
    country: { type: String, required: true },
    state: { type: String, required: true },
    city: { type: String, required: true },
    zipcode: { type: String, required: true },
    additionalInformation: { type: String, required: true },
    totalAmount: { type: String, required: true },
    homeAddress: { type: String, required: true },
    orderStatus: { type: Number, default: 1 },
    cardnumber: { type: String, required: false },
    expiryDate: { type: String, required: false },
    cvvnumber: { type: String, required: false },
    orderDate: { type: Date, default: Date.now },
  },
  {
    collection: "Orders",
  }
);

mongoose.model("Orders", OrderSchema);
