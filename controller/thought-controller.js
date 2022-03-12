const { User, Thought } = require('../models');

const thoughtController = {
    // return all thoughts
    getAllThoughts(req, res) {
        Thought.find({})
        .select('-__v')
        .then(data => res.json(data))
        .catch(err => {
            console.error(err);
            res.status(400).json(err);
        })
    },

    // get thought by id
    getThought({ params }, res) {
        Thought.find({ _id: params.id })
        .select('-__v')
        .then(data => res.json(data))
        .catch(err => {
            console.error(err);
            res.status(400).json(err);
        })
    },
    
    // create new thought
    addThought({ params, body }, res) {
        Thought.create(body)
        .then(({ _id }) => {
            return User.findOneAndUpdate(
                { _id: params.id },
                { $push: { thoughts: _id } },
                { new: true }
            )
        }).then(data => {
            if (!data) {
                res.status(404).json({ message: 'No thought found with this id!' })
                return;
            }
            res.json(data);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    }
}

module.exports = thoughtController;