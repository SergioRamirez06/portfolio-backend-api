import { envs } from './config/envs';
import { AppRoutes } from './presentation/routes';
import { Server } from './presentation/server';


(async()=> {
  main();
})();


function main() {
  const port = Number(process.env.PORT ?? 3000);
  console.log('MAILER_SERVICE',process.env.MAILER_SERVICE)
  console.log('MAILER_EMAIL',process.env.MAILER_EMAIL)
  console.log('MAILER_SECRET_KEY',process.env.MAILER_SECRET_KEY)
  console.log('SEND_EMAIL', process.env.SEND_EMAIL)


  const server = new Server({
    port,
    routes: AppRoutes.routes,
  });

  server.start();
}