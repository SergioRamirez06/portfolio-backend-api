import { rateLimitConfig } from "../../config";
import rateLimit from "express-rate-limit";

export class RateLimitMiddleware {

  static contactLimiter = rateLimit({
    ...rateLimitConfig,
    standardHeaders: true,
    legacyHeaders: false,
    message: {
      error: "Demasiadas solicitudes, intenta nuevamente en unos minutos"
    }
  });

}