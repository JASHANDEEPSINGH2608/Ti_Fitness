// routes/queryRoutes.js
import express from 'express';
import { submitQuery } from '../controllers/quer.controller.js';
import { getQueries } from '../controllers/quer.controller.js';
const router = express.Router();

router.post("/home", submitQuery);
router.get("/admin", getQueries); 

export default router;
