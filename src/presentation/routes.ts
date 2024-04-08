import { Router } from 'express';
import { UserRoutes } from './users/routes';

export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    // definimos todas las rutas de nuestro servidor.
    router.use('/api/users', UserRoutes.routes);

    return router;
  }
}
