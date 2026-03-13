import swaggerJSDoc from "swagger-jsdoc";
import { ContactSchema, ProjectSchema } from "../docs";
import { envs } from "./envs";

const WEB_SERVICE = envs.WEB_SERVICE;

export class SwaggerConfig {

  static getSpec() {

    return swaggerJSDoc({
      definition: {
        openapi: "3.0.0",
        info: {
          title: "Portfolio API",
          version: "1.0.0",
          description: "API del portafolio de Sergio"
        },
        servers: [
          {
            url: `${WEB_SERVICE}/api`
          }
        ],
        components: {
          schemas: {
            ContactDto: ContactSchema,
            ProjectDto: ProjectSchema
          }
        }
      },
      apis: ["./src/presentation/routes/*.ts"]
    });

  }

}