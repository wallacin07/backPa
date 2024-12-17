import { Request, Response, NextFunction } from 'express';

// Função que envolve funções assíncronas e passa os erros para o middleware de erro
export const asyncMiddleware = (fn: Function) => {
  return (req: Request, res: Response, next: NextFunction) => {
    // A função assíncrona que você passou como argumento será chamada,
    // e qualquer erro será automaticamente passado para o próximo middleware de erro
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};
