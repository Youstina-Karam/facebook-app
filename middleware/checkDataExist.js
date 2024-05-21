import bcrypt from "bcrypt";
import { userModel } from "../modules/users/users.model.js";

const checkEmailExist = async (req, res, next) => {
  let user = await userModel.findOne({ where: { email: req.body.email } });
  if (user !== null) {
    return res.status(409).json({ message: "email already exists" });
  }
  next();
};

const hashPass = (req, res, next) => {
  req.body.password = bcrypt.hashSync(req.body.password, 8);
  next();
};

export const checkDataExist = [checkEmailExist, hashPass];

export const signInCheck = async (req, res, next) => {
  let user = await userModel.findOne({ where: { email: req.body.email } });
  if (user !== null) {
    let match = bcrypt.compareSync(req.body.password, user.password);
    if (match) next();
    else
      return res.status(401).json({ message: "Email or password incorrect" });
  } else
    return res.status(401).json({ message: "Email or password incorrect" });
};


export const auth =(req,res,next)=>{
  if (!req.user) {
    return res.status(401).json({ message: 'Unauthorized. Please log in.' });
  }
  next();
}