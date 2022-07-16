const User = require(('../model/model'))

const userController = {
    getUsers: async(req, res) => {
        try {
            const users = await User.find()

            res.status(200).json(users)
        } catch(err) {
            res.status(500).json(err)
        }
    },
    getUser: async(req, res) => {
        try {
            const user = await User.findById(req.params.id)

            res.status(200).json(user)
        } catch(err) {
            res.status(500).json(err)
        }
    },
}

module.exports = userController