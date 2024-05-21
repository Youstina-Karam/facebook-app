import express from 'express'
import { getUserPostComments, logout, signIn, signUp } from './users.controller.js';
import { auth, checkDataExist, signInCheck } from '../../middleware/checkDataExist.js';

const usersRoutes = express.Router();


usersRoutes.post('/auth/signUp',checkDataExist,signUp)
usersRoutes.post('/auth/signIn',signInCheck,signIn)
usersRoutes.post('/auth/logout',logout)
usersRoutes.get('/me/:userId/post/:postId',getUserPostComments);



export default usersRoutes;