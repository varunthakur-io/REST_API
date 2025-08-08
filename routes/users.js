import { Router } from 'express';
const router = Router();
import { find } from '../models/user';

router.get('/', async (req, res) => {
    try {
        const users = await find();
        res.render('userList', { users });
    } catch (error) {
        res.status(500).send('Internal server error');
    }
});

export default router;