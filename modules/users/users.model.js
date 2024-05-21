import{DataTypes, Model } from 'sequelize';
import {sequelize} from '../../database/dbConnection.js'

export class userModel extends Model {}

 userModel = sequelize.define("user", {
    username: { type: DataTypes.STRING(100) },
    email: { type: DataTypes.STRING(100) },
    password: { type: DataTypes.STRING(100) },
  });

