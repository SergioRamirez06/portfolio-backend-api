import {
  CustomError,
  PrismaError,
  ProjectDto,
  ProjectEntity,
  UpdateProjectDto
} from '../../domain';

import { PrismaAdapter } from '../../infrastructure';

export class ProjectService {

  private prisma = PrismaAdapter.client;

  async create(projectDto: ProjectDto) {

    try {

      const project = await this.prisma.project.create({
        data: { ...projectDto }
      });

      return ProjectEntity.fromObject(project);

    } catch (error) {
      // console.log(error);
      PrismaError.handle(error);
    }

  }


  async findAll(page: number = 1, limit: number = 10) {

    const skip = (page - 1) * limit;

    try {

      const [projects, total] = await Promise.all([
        this.prisma.project.findMany({
          skip,
          take: limit,
          orderBy: { createdAt: 'desc' }
        }),
        this.prisma.project.count()
      ]);

      return {
        total,
        page,
        limit,
        projects: projects.map(p => ProjectEntity.fromObject(p))
      };

    } catch (error) {
      PrismaError.handle(error);
    }

  }


  async findById(id: string) {

    try {

      const project = await this.prisma.project.findUnique({
        where: { id }
      });

      if (!project)
        throw CustomError.notFound('Proyecto no encontrado');

      return ProjectEntity.fromObject(project);

    } catch (error) {
      PrismaError.handle(error);
    }

  }

  async update(id: string, updateProjectDto: UpdateProjectDto) {

    try {

      await this.prisma.project.update({
        where: { id },
        data: { ...updateProjectDto }
      });

      return { message: `Proyecto actualizado correctamente ${id}` }

    } catch (error) {
      PrismaError.handle(error);
    }

  }


  async delete(id: string) {

    try {

      await this.prisma.project.delete({
        where: { id }
      });

      return { message: `Proyecto eliminado correctamente ${id}` };

    } catch (error) {
      PrismaError.handle(error);
    }

  }

}