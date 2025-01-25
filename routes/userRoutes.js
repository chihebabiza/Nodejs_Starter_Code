import express from 'express';
const router = express.Router();

import userControllers from '../controllers/userController.js'

router.get('/', userControllers.getHome);


export default router;
