import { Request, Response } from "express";
import { ContactDto, CustomError } from "../../domain";
import { ContactService } from "../service/contact.service";


export class ContactController {

    constructor (
        private contactService: ContactService,
    ) {}

    private handleError ( error: unknown, res: Response ) {
        if( error instanceof CustomError ) {
            return res.status( error.statusCode ).json({ error: error.message })
        }

        console.log({error})
        res.status(500).json({ error: 'Internal Server'})
    }

    sendMessage = (req: Request, res: Response) => {
        const [error, contactDto] = ContactDto.create(req.body);
        if( error ) return res.status(400).json({ error });

        this.contactService.create(contactDto!)
            .then( contact => res.status(201).json(contact) )
            .catch( error => this.handleError(error, res) );
    };

}