import { envs } from './config/envs';
import { AppRoutes } from './presentation/routes';
import { Server } from './presentation/server';


(async()=> {
  main();
})();


function main() {

  const server = new Server({
    port: envs.PORT || 3000,
    routes: AppRoutes.routes,
  });

  server.start();
}