const { User } = require('../models')

const userController = {
    // return all users
    getAllUsers(req, res) {
        User.find({})
        .populate({
            path: 'thoughts',
            select: '-__v'
        })
        .populate({
            path: 'friends',
            select: '-__v'
        })
        .then(data => res.json(data))
        .catch(err => {
            console.error(err);
            res.status(400).json(err);
        })
    },

    // create user
    createUser({ body }, res) {
        User.create(body)
        .then(data => res.json(data))
        .catch(err => res.status(400).json(err));
    }
}

module.exports = userController;