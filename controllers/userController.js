const User = require(('../model/model'))

const userController = {
    getUsers: async(req, res) => {
        try {
            const users = await User.find()

            res.status(200).json(users)
        } catch(err) {
            res.status(500).json(err)
        }
    }
}

module.exports = userController