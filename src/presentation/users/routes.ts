import { Router } from 'express';
import { UserController } from './controller';
import { UserService } from './services';

export class UserRoutes {
  static get routes(): Router {
    const router = Router();

    // initialize controller here

    const userService = new UserService();
    const userController = new UserController(userService);

    // set all routes here related to users
    router.get('/', userController.getUsers);
    router.get('/:id', userController.getUserById);

    return router;
  }
}
