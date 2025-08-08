import { Router } from 'express';
const router = Router();

import { getAllUsers, createUser, getUserById, updateUser, deleteUser } from "../../controllers/usersController";

router.route("/users")
    .get(getAllUsers)
    .post(createUser);

router.route('/users/:id')
    .get(getUserById)
    .patch(updateUser)
    .delete(deleteUser);

export default router;