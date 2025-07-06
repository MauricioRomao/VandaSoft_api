import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(
process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
});


sequelize.authenticate()
.then(() => console.log("conectado com sucesso"))
.catch((Error)=> console.log("Erro ao conectar com o banco de dados", Error));



export default sequelize;