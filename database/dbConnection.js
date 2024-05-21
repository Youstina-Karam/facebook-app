import { Sequelize } from "sequelize"

  export const sequelize = new Sequelize("mysql://uflwi9k3iwusmsje:ZYxAb2RNfzfYl0RZXJoj@bwoizyqnauxrkx7itzrx-mysql.services.clever-cloud.com:3306/bwoizyqnauxrkx7itzrx");
try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }


  await  sequelize.sync({force:true});

