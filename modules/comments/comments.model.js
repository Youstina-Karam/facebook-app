import{DataTypes, Model } from 'sequelize';
import {sequelize} from '../../database/dbConnection.js'

export class commentModel extends Model {
  
}

commentModel = sequelize.define("comment", {
    content: { type: DataTypes.STRING(100) },
    postId: { type: DataTypes.INTEGER },
    userId: { type: DataTypes.INTEGER },
  });
