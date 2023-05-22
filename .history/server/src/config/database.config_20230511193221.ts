import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const { DB_USER, DB_PASSWORD, DB_NAME } = process.env;
export async function connect() {
  try {
    await mongoose.connect(
      `mongodb+srv://dnhau191:OAnL9prjyRDmnet@cluster0.ieournu.mongodb.net/?retryWrites=true&w=majority`
    );


    console.log("Connected to MongoDB");
  } catch (err) {
    console.log("err", err);
  }
}
