const userModel = require("../models/userModel")
const jwt = require("jsonwebtoken");

const userExist = async function (req, res, next) {
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  if (!user) {
    return res.send("No such user exists");
  }
  next()
}

const tokenValidation = async function (req, res, next) {
  let token = req.headers["x-Auth-token"];
  if (!token) token = req.headers["x-auth-token"];
  if (!token) return res.send({ status: false, msg: "token must be present" });
  let decodedToken = jwt.verify(token, "functionup-plutonium-secret-key");
  let userId = req.params.userId
  if(!(decodedToken.userId === userId)){
    return res.send({status: false, msg: "userId is not correct, param user and token user not matched"})
  }
  else {
    next()
  }
}

module.exports.userExist = userExist
module.exports.tokenValidation = tokenValidation
