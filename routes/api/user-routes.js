const router = require('express').Router();

const { getAllUsers } = require('../../controller/user-controller');

router.route('/').get(getAllUsers);

module.exports = router;