const mongoose = require("mongoose");

const uuid = require("uuid");

// 1. Define your schema
const userSchema = new mongoose.Schema({
  id: { type: String, required: true, default: () => uuid.v4() },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

// 2. Create our Data Model
const UserModel = mongoose.model("User", userSchema);

const UserController = {
  UserModel,
};

module.exports = UserController;
