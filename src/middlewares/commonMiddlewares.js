const freeAppUser = async function(req, res, next) {
    let isFreeAppUser = req.headers.isfreeappuser
    if(!isFreeAppUser) return res.send({Error: "isFreeAppUser request is mandatory"})
    next()
    }


module.exports.freeAppUser= freeAppUser
