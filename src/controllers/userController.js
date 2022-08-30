const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
  try {
    let userData = req.body;
    let savedData = await userModel.create(userData);
    res.status(201).send({ msg: savedData });
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const loginUser = async function (req, res) {
  try {
    let userName = req.body.emailId;
    let password = req.body.password;

    let user = await userModel.findOne({ emailId: userName, password: password });
    if (!user)
      return res.status(404).send({ status: false, msg: "username or the password is not corerct" });
    let token = jwt.sign(
      {
        userId: user._id.toString(),
        batch: "plutonium",
        organisation: "FUnctionUp",
      },
      "functionup-plutonium-secret-key"
    );
    res.setHeader("x-auth-token", token);
    res.status(200).send({ status: true, data: token });
  } catch (error) {
    return res.status(500).send(error.message)
  }
};

const getUserData = async function (req, res) {

  try {
    let userId = req.params.userId;
    let userDetails = await userModel.findById(userId);
    res.status(200).send({ status: true, data: userDetails });
  } catch (error) {
    return res.status(500).send(error.message)
  }
};

const updateUser = async function (req, res) {
  try {
    let userId = req.params.userId
    let userData = req.body;
    let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData, { new: true });
    res.status(201).send({ status: true, data: updatedUser });
  } catch (error) {
    return res.status(500).send(error.message)
  }
};

const postMessage = async function (req, res) {
  try {
    let message = req.body.message
    let user = req.user
    let updatedPosts = user.posts
    updatedPosts.push(message)
    let updatedUser = await userModel.findOneAndUpdate({ _id: user._id }, { posts: updatedPosts }, { new: true })
    return res.status(201).send({ status: true, data: updatedUser })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteUser = async function (req, res) {
  try {
    let userId = req.params.userId
    let userData = req.body;
    let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData, { new: true });
    res.status(200).send({ status: true, data: updatedUser });
  } catch (error) {
    return res.status(500).send(error.message)
  }
}


module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.postMessage = postMessage
module.exports.deleteUser = deleteUser;
