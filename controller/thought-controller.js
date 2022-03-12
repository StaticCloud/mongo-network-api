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
    }
}

module.exports = thoughtController;