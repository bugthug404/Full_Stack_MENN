import mongoose from "mongoose";
import mysql from "mysql2";

export const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB ?? "");
    console.log("Connected to MongoDB!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export const connectToMySQL = () => {
  // const connection = mysql.createConnection({
  //   host: process.env.SQLHOST,
  //   user: process.env.SQLUSER,
  //   password: process.env.SQLPASSWORD,
  //   database: process.env.SQLDATABASE,
  //   port: parseInt(process.env.PORT || "3306") || 3306,
  // });
  // console.log("trying mysql");
  // connection.connect((err) => {
  //   if (err) {
  //     console.error("Error connecting to MySQL:", err);
  //     return;
  //   }
  //   console.log("Connected to MySQL!");
  // });
};
