const { freeAppUser } = require("../middlewares/commonMiddlewares")
const UserModel = require("../models/userModel")

const createUser = async function (req, res) {
    //let freeAppUser = req.headers.isfreeappuser
    let data = req.body
    //data['isFreeAppUser'] = freeAppUser
    const allUsers = await UserModel.create(data)
    res.send({ msg: allUsers })
}

module.exports.createUser = createUser
