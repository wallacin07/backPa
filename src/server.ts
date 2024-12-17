import express, { Request, Response, NextFunction } from 'express';

const app = express();
app.use(express.json());

// Função assíncrona usando middleware
const asyncRouteHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await new Promise((resolve) => resolve('Resultado assíncrono'));
    res.status(200).json({ message: 'Sucesso', data: result });
  } catch (error) {
    next(error); // Passando erro para o middleware de erro
  }
};

app.get('/rota', asyncRouteHandler);

// Middleware de erro
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: 'Erro do servidor', error: err.message });
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
