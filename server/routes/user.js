import express from 'express';

import { logIn, signUp } from '../controllers/user.js';

const router = express.Router();

router.post('/logIn', logIn);
router.post('/signUp', signUp);

export default router;