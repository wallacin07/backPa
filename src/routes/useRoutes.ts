import { Router } from 'express';
import { getUsers, createUser } from '../controllers/UserController';
import { asyncMiddleware } from '../middlewares/asyncMiddleware';

const router = Router();

router.get('/', asyncMiddleware(getUsers));
router.post('/',asyncMiddleware(createUser));

export default router;
