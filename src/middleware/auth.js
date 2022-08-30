const userModel = require("../models/userModel")
const jwt = require("jsonwebtoken");

const userExist = async function (req, res, next) {
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  if (!user) {
    return res.send("No such user exists");
  }
  req.user = user
  next()
}


const authenticate = function(req, res, next) {
  let token = req.headers["x-Auth-token"];
  if (!token) token = req.headers["x-auth-token"];
  if (!token) return res.send({ status: false, msg: "token must be present" });
  req.token = token
  next()
}


const authorise = function(req, res, next) {
  let decodedToken = jwt.verify(req.token, "functionup-plutonium-secret-key");
  let userId = req.params.userId
  if(!(decodedToken.userId === userId)){
    return res.send({status: false, msg: "userId is not correct, param user and token user not matched"})
  }
  else {
    req.authorise = authorise;
    next()
  }
}

module.exports.userExist = userExist
module.exports.authenticate = authenticate
module.exports.authorise = authorise
