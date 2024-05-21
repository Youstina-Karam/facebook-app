import { postModel } from "../posts/posts.model.js";
import { userModel } from "../users/users.model.js";
import { commentModel } from "./comments.model.js";

// Create a comment
export const createComment = async (req, res) => {
  await commentModel.create(req.body);
  res.status(201).json({ message: "added new comment" });
};

// Get all comments
export const getComments = async (req, res) => {
  const comments = await commentModel.findAll({
    include: [
      { model: userModel, attributes: ["id", "username", "email"] },
      { model: postModel, attributes: ["id", "title"] },
    ],
  });
  res.json(comments);
};

// Get a single comment
export const getComment = async (req, res) => {
  const comment = await commentModel.findOne({
    where:{id: req.params.id},
    include: [
      { model: userModel, attributes: ["id", "username", "email"] },
      { model: postModel, attributes: ["id", "title"] },
    ],
  });
  if (!comment) {
    return res.status(404).json({ error: "Comment not found" });
  }
  res.json(comment);
};

// Update a comment
export const updateComment = async (req, res) => {
  const comment = await commentModel.findByPk(req.params.id);
  if (!comment) {
    return res.status(404).json({ error: "Comment not found" });
  }
  comment.content = req.body.content;
  await comment.save();
  res.json({ message: "updated" });
};

// Delete a comment
export const deleteComment = async (req, res) => {
  const comment = await commentModel.findByPk(req.params.id);
  if (!comment) {
    return res.status(404).json({ error: "Comment not found" });
  }
  await comment.destroy();
  res.status(200).json({ message: "comment deleted successfully" });
};
