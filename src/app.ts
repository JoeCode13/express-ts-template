import { envs } from './config';
import { AppRoutes } from './presentation/routes';
import { Server } from './presentation/server';

async function main() {
  const server = new Server({
    port: envs.PORT,
    routes: AppRoutes.routes,
  });

  server.start();
}

main();
