import { Request, Response } from 'express';
import { User } from '../models/User';
import { CreationAttributes } from 'sequelize/types';  // Importe CreationAttributes
import { asyncMiddleware } from '../middlewares/asyncMiddleware';
// Definir a interface para os dados necessários para criar um usuário
interface CreateUserInput {
  name: string;
  email: string;
  password: string;
}

export const getUsers = async (req: Request, res: Response) => {
      const users = await User.findAll();
      return res.status(200).json(users);
  };

export const createUser = async (req: Request, res: Response) => {
  const { name, email, password }: CreateUserInput = req.body;

 
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'E-mail já registrado.' });
    }

    // Criação do novo usuário, tipado com CreationAttributes do Sequelize
    const user = await User.create({
      name,
      email,
      password,
    } as CreationAttributes<User>); // Uso do tipo correto para criação
    return res.status(201).json(user);
};
