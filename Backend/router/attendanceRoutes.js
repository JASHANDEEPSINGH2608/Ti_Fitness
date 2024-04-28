// routes/rollNoRoutes.js

import express from 'express';
import { createRollNo,getAllRollNos } from '../controllers/attendance.controller.js';

const router = express.Router();

router.post('/rollnos', createRollNo);
router.get('/rollnos', getAllRollNos);


export default router;
