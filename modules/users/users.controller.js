import { commentModel } from "../comments/comments.model.js";
import { postModel } from "../posts/posts.model.js";
import { userModel } from "./users.model.js";

//sign up
export const signUp = async (req, res) => {
  await userModel.create(req.body);
  res.status(201).json({ message: "success" });
};

// sign in
export const signIn = (req, res) => {
  res.status(200).json({ message: "login..." });
};

//logout
export const logout = (req, res) => {
  res.status(200).json({ message: "Logged out successfully" });
};

//Special endpoint to get a specific user with a specific post and post’s comments.
export const getUserPostComments = async (req, res) => {
  const { userId, postId } = req.params;

  const user = await userModel.findOne({
    where: { id: userId },
    attributes: ["id", "username", "email"],
    include: [
      {
        model: postModel,
        where: { id: postId },
        include: [{ model: commentModel }],
      },
    ],
  });

  if (!user) {
    return res.status(404).json({ message: "User or Post not found." });
  }

  res.status(200).json({ user });
};
