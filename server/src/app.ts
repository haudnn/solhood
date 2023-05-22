import bodyParser from "body-parser";
import express from "express"; 
import cors from 'cors'
import { connect } from "./config/database.config";

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

connect();

export default app;
