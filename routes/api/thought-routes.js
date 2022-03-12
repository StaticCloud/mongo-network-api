const router = require('express').Router();

const { 
    getAllThoughts,
    addThought,
    getThought,
    updateThought,
    removeThought } = require('../../controller/thought-controller');

router.route('/').get(getAllThoughts);
router.route('/:id').get(getThought).post(addThought).put(updateThought);
router.route('/:userId/:thoughtId').delete(removeThought);

module.exports = router;