import express from 'express'
import { addPost, deletePosts, getAllPosts, getPost, updatePosts } from './posts.controller.js';
import { auth } from '../../middleware/checkDataExist.js';

const postsRoutes = express.Router();

postsRoutes.post("/",addPost).get('/',getAllPosts)
postsRoutes.get('/:id',getPost).put('/:id',auth,updatePosts).delete('/:id',auth,deletePosts)






export default postsRoutes;