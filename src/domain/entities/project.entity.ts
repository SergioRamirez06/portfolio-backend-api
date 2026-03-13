import { CustomError } from "../error/custom.error"


export class ProjectEntity {

    constructor(
        public id: string,
        public title: string,
        public description: string,
        public technologies: string[],
        public githubUrl: string,
        public demoUrl?: string,
        public image?: string,
    ) {}


    static fromObject( object: { [key: string]: any }) {
        
        const {
            id,
            title,
            description,
            technologies,
            githubUrl,
            demoUrl,
            image
        } = object;

        if( !id ) throw CustomError.badRequest('El id es requerido');
        if( !title ) throw CustomError.badRequest('El title es requerido');
        if( !description ) throw CustomError.badRequest('El description es requerido');
        if( !technologies ) throw CustomError.badRequest('El technologies es requerido');
        if( !githubUrl ) throw CustomError.badRequest('El githubUrl es requerido');

        return new ProjectEntity(
            id,
            title,
            description,
            technologies,
            githubUrl,
            demoUrl,
            image
        );
    }
}