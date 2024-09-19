const mongoose = require("mongoose");
const User = mongoose.model("Users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../data/key");

module.exports.CreateUser = async (req, res) => {
  const { name, email, password } = req.body;
  // console.log("body data: ", req.body);
  const encryptedPassword = await bcrypt.hash(password, 10);
  try {
    const oldUser = await User.findOne({ email });
    if (oldUser) {
      return res.json({ status: "User Already Exists" });
    }
    await User.create({
      name,
      email,
      password: encryptedPassword,
    });
    res.send({ status: "Registerd successfully" });
  } catch (error) {
    res.send({ status: "Register failed" });
  }
};

module.exports.LoginUser = async (req, res) => {
  const { email, password } = req.body;
  // console.log(email);
  const user = await User.findOne({ email });
  if (!user) {
    return res.json({ error: "User Not found" });
  }
  if (await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ email: user.email }, SECRET_KEY, {
      expiresIn: "1hr",
    });

    if (res.status(200)) {
      // res.redirect("/home");
      return res.json({ status: "Login Successfull", data: { user, token } });
    } else {
      return res.json({ error: "Login failed" });
    }
  }
  res.json({
    status: "Invalid email or password",
    error: "Invalid email or password",
  });
};

module.exports.GetAllUsers = async (req, res) => {
  try {
    const allCustomers = await User.find();
    res.status(200).json(allCustomers);
  } catch (error) {
    res.status(400).send({ error: error });
  }
};

module.exports.DeleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.userId);
    res.json({ message: "User deleted" });
  } catch (error) {
    console.log("DeleteUser error >> ", error);
    return res.json({ message: "Internal server error", error });
  }
};

module.exports.ViewUserDetails = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId);
    res.json({ message: "User Details", user });
  } catch (error) {
    console.log("ViewUserDetails error >> ", error);
    return res.json({ message: "Internal server error", error });
  }
};

module.exports.ResetPassword = async (req, res) => {
  try {
    const { email, newPassword } = req.body;
    // console.log("email & newPass >> ", email + " ", newPassword);
    const findUser = User.findOne({ email });
    if (!findUser) {
      return res.send({ status: "Email does not exist" });
    } else {
      const encryptedPassword = await bcrypt.hash(newPassword, 10);
      await User.findOneAndUpdate(email, { password: encryptedPassword });
      res.json({ status: "Password Reset Successully" });
    }
  } catch (error) {
    console.log("resetPassword error >> ", error);
    res.send({ status: "Some error occurred" });
  }
};

// admin login
// module.exports.AdminLogin = async(req, res)=>{
//   try {
//     const {email, password} = req.body;
//   } catch (error) {
//     console.log("AdminLogin error >> ",error)
//     return res.status(500).json({message:"Something went wrong."})
//   }
// }