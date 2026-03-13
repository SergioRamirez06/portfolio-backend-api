export class UpdateProjectDto {

    constructor(
        public title?: string,
        public description?: string,
        public technologies?: string[],
        public githubUrl?: string,
        public demoUrl?: string,
    ){}

    static create(object: { [key: string]: any }): [string?, UpdateProjectDto?] {

        const { title, description, technologies, githubUrl, demoUrl } = object;

         const techArray: string[] = (
            Array.isArray(technologies) ? technologies : [technologies]
        )
            .flatMap(t => String(t).split(/[, ]+/))
            .map(t => t.trim())
            .filter(Boolean);

        return [undefined, new UpdateProjectDto(
            title,
            description,
            techArray,
            githubUrl,
            demoUrl
        )];

    }

}