import express from "express";
import {postUser,loginUser} from '../controllers/user.controller.js';

const router=express.Router();
router.post('/signup',postUser);
router.post('/login',loginUser);

export default router;