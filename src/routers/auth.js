import { Router } from 'express';
import { registerUserSchema } from '../validation/auth.js';
import { registerUserController } from '../controllers/auth.js';
import { validateBody } from '../middleware/validateBody.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
const router = Router();
router.post(
  '/register',
  validateBody(registerUserSchema),
  ctrlWrapper(registerUserController),
);
export default router;
