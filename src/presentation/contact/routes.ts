import { Router } from 'express';
import { ContactController } from './controller';
import { ContactService } from '../service/contact.service';
import { EmailAdapter } from '../../infrastructure/email/email.adapter';
import { envs } from '../../config';
import { RateLimitMiddleware } from '../middleware/rate-limit.middleware';


export class ContactRoutes {

  static get routes(): Router {

    const router = Router();

    const emailAdapter =  new EmailAdapter(
          envs.MAILER_SERVICE,
          envs.MAILER_EMAIL,
          envs.MAILER_SECRET_KEY,
          envs.SEND_EMAIL,
        )    

    const contactService =  new ContactService(emailAdapter);
    const controller = new ContactController(contactService);
    
    // Definir las rutas
    router.post('/', [RateLimitMiddleware.contactLimiter], controller.sendMessage);

    return router;
  }


}

