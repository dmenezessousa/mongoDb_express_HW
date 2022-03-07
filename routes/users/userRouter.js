const express = require("express");
const { UserModel } = require("../users/userController");

const userRouter = express.Router();

userRouter.post("/create-user", (req, res) => {
  const user = req.body.user;

  // TODO: Save User in the Database

  // 3. use the Data Model we created to create mongo db documents
  const newUser = new UserModel({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    password: user.password,
  });

  // 4. save your user as a mongo db document.
  newUser.save().then((savedUser) => {
    console.log("savedUser: ", savedUser);

    // A user object without the extra fields
    const cleanSavedUser = {
      id: savedUser.id,
      firstName: savedUser.firstName,
      lastName: savedUser.lastName,
      email: savedUser.email,
    };

    res.send(cleanSavedUser);
  });
});

userRouter.post("/sign-in", async (req, res) => {
  const userCredentials = req.body.userCredentials;

  // get the user from the Database
  // verify that the credentials match
  const foundUser = await UserModel.findOne({
    email: userCredentials.email,
    password: userCredentials.password,
  });

  // clean the fields that we dont need to provide to the front end
  const cleanFoundUser = {
    id: foundUser.id,
    firstName: foundUser.firstName,
    lastName: foundUser.lastName,
    email: foundUser.email,
  };

  // return that user in the response
  res.send(cleanFoundUser);
});

module.exports = userRouter;
