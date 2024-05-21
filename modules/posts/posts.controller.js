import { userModel } from "../users/users.model.js";
import { postModel } from "./posts.model.js";

//add new post
export const addPost = (req, res) => {
  postModel.create(req.body);
  res.status(201).json({ message: "added new post" });
};

//get all posts
export const getAllPosts = async (req, res) => {
  const allPosts = await postModel.findAll({
    include: [{
      model: userModel,
      attributes: ['id', 'username', 'email'], 
      required: true,
    },]
  });
  
  res.status(200).json({ message: "success", allPosts: allPosts });
};

// get single post
export const getPost = async (req, res) => {
  const post = await postModel.findOne({
    where: { id: req.params.id },
    include: [
      {
        model: userModel,
        attributes: ['id', 'username', 'email']
      },
    ],
  });
  if (!post) {
    return res.status(404).json({ error: "Post not found" });
  }
  res.status(200).json({ message: "success", post: post });
};

//update posts
export const updatePosts = async (req, res) => {
  const post = await postModel.findByPk(req.params.id);
  if (!post) {
    return res.status(404).json({ error: "Post not found" });
  }
  post.title = req.body.title;
  post.content = req.body.content;
  await post.save();
  res.status(200).json({ message: "updated" });
};

//delete posts
export const deletePosts = async (req, res) => {
  const post = await postModel.findByPk(req.params.id);
  if (!post) {
    return res.status(404).json({ error: "Post not found" });
  }
  await post.destroy();
    res.status(200).json({ message: 'Post deleted successfully' });
};
