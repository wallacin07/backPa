import express, { Request, Response, NextFunction } from 'express';
import userRoutes from './routes/useRoutes'
import { User } from './models/User'; // Ou o caminho correto para seu modelo
import sequelize from './config/database';

sequelize.addModels([User]); // Adicionando explicitamente o modelo ao Sequelize


const app = express();

app.use(express.json());  // Middleware para parsing de JSON
app.use('/api', userRoutes);  // Usando as rotas

// Middleware de erro global
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(500).json({ message: 'Erro no servidor', error: err.message });
});

// Configuração da porta
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
