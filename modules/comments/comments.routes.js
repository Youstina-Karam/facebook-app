import express from 'express'
import { createComment, deleteComment, getComment, getComments, updateComment } from './comments.controller.js';

const commentRoutes = express.Router()


commentRoutes.post("/",createComment).get('/',getComments)
commentRoutes.get('/:id',getComment).put('/:id',updateComment).delete('/:id',deleteComment)


export default commentRoutes ;