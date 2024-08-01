// src/router/students.js

import { Router } from 'express';

import {
  getStudentsController,
  getStudentByIdController,
} from '../controllers/students.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

router.get('/students', getStudentsController);
router.get('/students/:studentId', ctrlWrapper(getStudentByIdController));

export default router;
