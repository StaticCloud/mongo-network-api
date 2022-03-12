const { User } = require('../models')

const userController = {
    // return all users
    getAllUsers(req, res) {
        User.find({})
        .populate({
            path: 'thoughts',
            select: ['-__v', '-friends', '-thoughts']
        })
        .populate({
            path: 'friends',
            select: ['-__v', '-friends', '-thoughts']
        })
        .select('-__v')
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
    },

    // get user by id
    getUserById({ params }, res) {
        User.findOne({ _id: params.id })
        .populate({
            path: 'thoughts',
            select: ['-__v', '-friends', '-thoughts']
        })
        .populate({
            path: 'friends',
            select: ['-__v', '-friends', '-thoughts']
        })
        .select('-__v')
        .then(data => {
            if (!data) {
                res.status(404).json({ message: 'No user found with this id!' })
                return;
            }
            res.json(data);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
    },

    // update a user given an id and body
    updateUser({ params, body }, res) {
        User.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
        .then(data => {
            if (!data) {
                res.status(404).json({ message: 'No user found with this id!' })
                return;
            }
            res.json(data);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
    },

    // delete user given id
    deleteUser({ params }, res) {
        User.findOneAndDelete({ _id: params.id })
        .then(data => {
            if (!data) {
                res.status(404).json({ message: 'No user found with this id!' })
                return;
            }
            res.json(data);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
    },

    // add friend
    addFriend({ params }, res) {
        User.findByIdAndUpdate(
            { _id: params.id },
            { $push: { friends: params.friendId }},
            { new: true, runValidators: true })
        .then(data => {
            if (!data) {
                res.status(404).json({ message: 'No user found with this id!' })
                return;
            }
            res.json(data);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
    },

    // remove friend
    removeFriend({ params }, res) {
        User.findByIdAndUpdate(
            { _id: params.id },
            { $pull: { friends: params.friendId }},
            { new: true, runValidators: true })
        .then(data => {
            if (!data) {
                res.status(404).json({ message: 'No user found with this id!' })
                return;
            }
            res.json(data);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
    }
}

module.exports = userController;