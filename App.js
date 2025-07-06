import express from 'express';
import dotenv from "dotenv";

import "./config/Db.Config.js";
import user from "./Routes/User.Router.js"
import Produtos from "./Routes/Produtos.Router.js"

export const App = express();
App.use(express.json())

dotenv.config();

App.use(user)
App.use(Produtos)

App.get('/', (req, res) => {
  res.send('Hello World!');
});
