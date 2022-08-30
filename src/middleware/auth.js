const userModel = require("../models/userModel")
const jwt = require("jsonwebtoken");
const { rawListeners } = require("../models/userModel");

const userExist = async function (req, res, next) {
  try {
    let userId = req.params.userId;
    let user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).send("No such user exists");
    }
    req.user = user
    next()
  } catch (error) {
      return res.status(500).send(error.message)
  }
}


const authenticate = function (req, res, next) {
  try {
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
    if (!token) return res.status(401).send({ status: false, msg: "token must be present" });
    req.token = token
    next()
  } catch (error) {
    return res.status(500).send(error.message)
  }
}


const authorise = function (req, res, next) {
  try {
    let decodedToken = jwt.verify(req.token, "functionup-plutonium-secret-key");
    let userId = req.params.userId
    if (!(decodedToken.userId === userId)) {
      return res.status(403).send({ status: false, msg: "userId is not correct, param user and token user not matched" })
    }
    else {
      req.authorise = authorise;
      next()
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports.userExist = userExist
module.exports.authenticate = authenticate
module.exports.authorise = authorise
