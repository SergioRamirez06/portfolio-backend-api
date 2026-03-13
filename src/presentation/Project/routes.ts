import { Router } from 'express';
import { ProjectController } from './controller';
import { ProjectService } from '../service/project.service';
import { ProjectMiddleware } from '../middleware/project.middleware';




export class ProjectRoutes {


  static get routes(): Router {

    const router = Router();

    const serviceProject =  new ProjectService();
    const controller = new ProjectController(serviceProject);
    
    // Definir las rutas
    router.get('/', controller.findAll);
    router.get('/:id', controller.findById);
    router.post('/', [ProjectMiddleware.validateApiKey], controller.create);
    router.put('/:id', [ProjectMiddleware.validateApiKey], controller.update);
    router.delete('/:id', [ProjectMiddleware.validateApiKey], controller.delete);



    return router;
  }


}

