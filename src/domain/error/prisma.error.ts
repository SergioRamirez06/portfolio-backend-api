import { CustomError } from "../error/custom.error";

export class PrismaError {

  static handle(error: any): never {

    switch (error.code) {

      case 'P2002':
        throw CustomError.badRequest('El registro ya existe');

      case 'P2025':
        throw CustomError.notFound('Registro no encontrado');

      case 'P2003':
        throw CustomError.badRequest('Error de relación en base de datos');

      default:
        throw CustomError.internalServer('Error de base de datos');

    }

  }

}