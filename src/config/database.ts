import { Sequelize } from 'sequelize-typescript';
import dotenv from 'dotenv';
import path from 'path';

// Carregar variáveis de ambiente
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

console.log(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, process.env.DB_HOST, process.env.DB_PORT);

const sequelize = new Sequelize({
  database: process.env.DB_NAME,     // Nome do banco de dados
  username: process.env.DB_USER,     // Usuário do banco
  password: process.env.DB_PASSWORD, // Senha do banco
  host: process.env.DB_HOST,         // Host do banco
  port: Number(process.env.DB_PORT), // Porta do banco
  dialect: 'postgres',               // Dialeto PostgreSQL
  models: [path.join(__dirname, '/../models')], // Caminho correto dos modelos
  logging: console.log,              // Ativa os logs para depuração
  synchronize: true,                 // Sincroniza automaticamente os modelos com o banco de dados (use com cautela em produção)
});

export default sequelize;
