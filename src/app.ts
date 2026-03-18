import { envs } from './config/envs';
import { AppRoutes } from './presentation/routes';
import { Server } from './presentation/server';


(async()=> {
  main();
})();


function main() {
  const port = Number(process.env.PORT ?? 3000);

  const server = new Server({
    port,
    routes: AppRoutes.routes,
  });

  server.start();
}