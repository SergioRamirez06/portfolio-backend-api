import { Request, Response } from "express";
import { CustomError, ProjectDto, UpdateProjectDto } from "../../domain";
import { ProjectService } from "../service/project.service";


export class ProjectController {

    constructor (
        private projectService: ProjectService,
    ) {}

    private handleError ( error: unknown, res: Response ) {
        if( error instanceof CustomError ) {
            return res.status( error.statusCode ).json({ error: error.message })
        }

        console.log({error})
        res.status(500).json({ error: 'Internal Server'})
    }

    create = (req: Request, res: Response) => {
        
        const [error, projectDto] =  ProjectDto.create(req.body);
        if( error ) return res.status(400).json({ error });


        this.projectService.create(projectDto!)
            .then( project => res.status(201).json({ project }) )
            .catch( error => this.handleError(error, res) )
    };

    findAll = (req: Request, res: Response) => {
        const { page = 1, limit = 10 } = req.query;

        this.projectService.findAll( +page, +limit )
            .then( project => res.status(200).json({ project }) )
            .catch( error => this.handleError(error, res) )

    };

    findById = (req: Request, res: Response) => {
        const id = req.params.id;

        this.projectService.findById( id )
            .then( project => res.status(200).json({ project }) )
            .catch( error => this.handleError(error, res) )
    };

    update = (req: Request, res: Response) => {
        const id = req.params.id;  
        const [error, updateProjectDto] =  UpdateProjectDto.create(req.body);
        if( error ) return res.status(400).json({ error });

        this.projectService.update( id, updateProjectDto! )
            .then( result => res.status(200).json(result) )
            .catch( error => this.handleError(error, res) )
    };

    delete = (req: Request, res: Response) => {
        const id = req.params.id;

        this.projectService.delete( id )
            .then(  result => res.status(200).json(result) )
            .catch( error => this.handleError(error, res) )
    }
}