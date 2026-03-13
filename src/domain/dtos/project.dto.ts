import { regularExps } from "../../config";

export class ProjectDto {

  constructor(
    public title: string,
    public description: string,
    public technologies: string[],
    public githubUrl: string,
    public demoUrl?: string,
  ) {}

  static create(object: { [key: string]: any }): [string?, ProjectDto?] {

    const { title, description, technologies, githubUrl, demoUrl } = object;

    if (!title) return ['El title es requerido'];
    if (!description) return ['El description es requerido'];
    if (!technologies) return ['technologies es requerido'];
    
    const techArray: string[] = (
        Array.isArray(technologies) ? technologies : [technologies]
    )
        .flatMap(t => String(t).split(/[, ]+/))
        .map(t => t.trim())
        .filter(Boolean);

    if (techArray.length === 0) {
      return ['tecnologias no es válida'];
    }

    if (!githubUrl) return ['El githubUrl es requerido'];
    if (!regularExps.githubRepo.test(githubUrl)) {
      return ['El githubUrl no es una URL válida de GitHub'];
    }

    return [undefined, new ProjectDto(
      title,
      description,
      techArray,
      githubUrl,
      demoUrl
    )];

  }
}