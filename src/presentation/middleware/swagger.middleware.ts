import swaggerUi from "swagger-ui-express";

import { Express } from "express";
import { SwaggerConfig } from "../../config";

export class SwaggerMiddleware {

  static setup(app: Express) {

    const swaggerSpec = SwaggerConfig.getSpec();

    app.use(
      "/docs",
      swaggerUi.serve,
      swaggerUi.setup(swaggerSpec)
    );

  }

}