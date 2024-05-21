import{DataTypes, Model } from 'sequelize';
import {sequelize} from '../../database/dbConnection.js'

export class postModel extends Model {}

 postModel = sequelize.define("post", {
    title: { type: DataTypes.STRING(100) },
    content: { type: DataTypes.STRING(100) },
    author: { type: DataTypes.INTEGER },
  });
