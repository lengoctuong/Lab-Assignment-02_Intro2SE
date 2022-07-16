const User = require(('../model/model'))

const userController = {
    createUser: async(req, res) => {
        try {
            const newUser = new User(req.body)
            const saveUser = await newUser.save()

            res.status(200).json(saveUser)
        } catch(err) {
            res.status(500).json(err)
        }
    },
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
    deleteUser: async(req, res) => {
        try {
            await User.findByIdAndDelete(req.params.id)

            res.status(200).json('Deleted successfully!')
        } catch(err) {
            res.status(500).json(err)
        }
    },
    updateUser: async(req, res) => {
        try {
            const user = await User.findById(req.params.id)
            await user.updateOne({ $set: req.body })

            res.status(200).json('Updated successfully!')
        } catch(err) {
            res.status(500).json(err)
        }
    }
}

module.exports = userController