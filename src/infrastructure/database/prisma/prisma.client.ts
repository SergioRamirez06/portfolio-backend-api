import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import { envs } from "../../../config";

const DATABASE_URL = envs.DATABASE_URL;

export class PrismaAdapter {

  private static prismaClient: PrismaClient;

  private constructor() {}

  static get client(): PrismaClient {

    if (!DATABASE_URL) {
      throw new Error("DATABASE_URL no está definido en .env");
    }

    if (!this.prismaClient) {

      const pool = new Pool({
        connectionString: DATABASE_URL,
        max: 10,
        idleTimeoutMillis: 30000
      });

      const adapter = new PrismaPg(pool);

      this.prismaClient = new PrismaClient({
        adapter,
        log: ['query', 'error', 'warn']
      });
    }

    return this.prismaClient;
  }
}