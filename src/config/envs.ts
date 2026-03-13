import 'dotenv/config';
import { get } from 'env-var';

export const envs = {

  PORT: get('PORT').required().asPortNumber(),

  POSTGRES_USER: get('POSTGRES_USER').required().asString(),
  POSTGRES_PASSWORD: get('POSTGRES_PASSWORD').required().asString(),
  POSTGRES_DB: get('POSTGRES_DB').required().asString(),

  API_KEY: get('API_KEY').required().asString(),

  SEND_EMAIL: get('SEND_EMAIL').default('false').asBool(),
  MAILER_SERVICE: get('MAILER_SERVICE').required().asString(),
  MAILER_EMAIL: get('MAILER_EMAIL').required().asString(),
  MAILER_SECRET_KEY: get('MAILER_SECRET_KEY').required().asString(),

  WEB_SERVICE: get('WEB_SERVICE').required().asString(),


  DATABASE_URL: get('DATABASE_URL').required().asString(),
}



