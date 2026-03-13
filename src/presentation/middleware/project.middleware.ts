import { Request, Response, NextFunction } from "express";
import { env } from "process";

const  API_KEY = env.API_KEY || "default_api_key";

export class ProjectMiddleware {

  static validateApiKey( req: Request, res: Response, next: NextFunction ) {

    const apiKey = req.header("x-api-key");

    if (!apiKey) {
        return res.status(401).json({
            message: "API Key requerida"
        });
    }

    if (apiKey !== API_KEY) {
        return res.status(403).json({
            message: "API Key inválida"
        });
    }

    next();
  }
}
