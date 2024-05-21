import express from "express";
import cors from "cors";
import { userModel } from "./modules/users/users.model.js";
import { postModel } from "./modules/posts/posts.model.js";
import { commentModel } from "./modules/comments/comments.model.js";
import usersRoutes from "./modules/users/users.routes.js";
import postsRoutes from "./modules/posts/posts.routes.js";
import commentRoutes from "./modules/comments/comments.routes.js";

const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.use("/", usersRoutes);
app.use("/posts", postsRoutes);
app.use("/comments", commentRoutes);

userModel.hasMany(postModel, {
    foreignKey: "author",
  });
  

postModel.belongsTo(userModel, {
  foreignKey: "author",
});
postModel.hasMany(commentModel, {
    foreignKey: "postId",
  });
commentModel.belongsTo(postModel, {
  foreignKey: "postId",
});
commentModel.belongsTo(userModel, { foreignKey: "userId" });

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
