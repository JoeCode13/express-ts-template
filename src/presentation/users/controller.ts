import { Request, Response } from 'express';
import { UserService } from './services';
import { CustomError } from '../../domain/errors/custom-error-handler';

export class UserController {
  // DI
  constructor(private readonly userService: UserService) {}

  getUsers = (_: Request, res: Response) => {
    this.userService
      .getUsers()
      .then((users) => res.status(200).json(users))
      .catch((error) => CustomError.handleError(error, res));
  };

  getUserById = (req: Request, res: Response) => {
    const { id } = req.params; // validate id params with any data validation library. e.g. Joi

    if (!id) {
      return res.status(400).json({ message: 'Id is required' });
    }

    this.userService
      .getUserById(id)
      .then((user) => res.status(200).json(user))
      .catch((error) => CustomError.handleError(error, res));
  };
}
