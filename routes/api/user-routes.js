const router = require('express').Router();

const { 
    getAllUsers, 
    createUser,
    getUserById,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../../controller/user-controller');

router.route('/').get(getAllUsers).post(createUser);

router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);

router.route('/:id/friends/:friendId').put(addFriend).patch(removeFriend);

module.exports = router;