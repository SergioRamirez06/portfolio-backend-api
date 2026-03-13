import { Router } from 'express';
import { ProjectRoutes } from './Project/routes';
import { ContactRoutes } from './contact/routes';




export class AppRoutes {


  static get routes(): Router {

    const router = Router();
    
    // Definir las rutas
    router.use('/api/projects', ProjectRoutes.routes );
    router.use('/api/contacts', ContactRoutes.routes );




    return router;
  }


}

