import { Router } from 'express';
import { LoginUserSchema, registerUserSchema } from '../validation/auth.js';
import {
  LoginUserController,
  registerUserController,
} from '../controllers/auth.js';
import { validateBody } from '../middleware/validateBody.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
const router = Router();
router.post(
  '/register',
  validateBody(registerUserSchema),
  ctrlWrapper(registerUserController),
);

router.post(
  '/login',
  validateBody(LoginUserSchema),
  ctrlWrapper(LoginUserController),
);

export default router;
