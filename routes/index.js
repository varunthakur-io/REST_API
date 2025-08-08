import { Router } from 'express';
const router = Router();

// Import route files
import apiRoutes from './api/users';
import usersRoutes from './users';

// Define base paths
router.use('/api', apiRoutes); // Routes for APIs
router.use('/users', usersRoutes); // Routes for users

// Define route handler for the root path ("/")
router.get('/', (req, res) => {
    res.redirect('/users'); // Redirect to "/users"
});

export default router;