const router = require('express').Router();

const { 
    getAllThoughts,
    addThought,
    getThought } = require('../../controller/thought-controller');

router.route('/').get(getAllThoughts);

router.route('/:id').get(getThought).post(addThought);

module.exports = router;