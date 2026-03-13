import { regularExps } from "../../config";

export class ContactDto {

    private constructor(
        public name: string,
        public email: string,
        public subject: string,
        public message: string
    ) {}

    static create(object: any): [string?, ContactDto?] {

        const { name, email, subject, message } = object;

        if (!name) return ['Nombre es requerido'];

        if (!email) return ['Email es requerido'];
        if( !regularExps.email.test(email) ) return ['Email no es válido'];
        
        if (!subject) return ['Subject es requerido'];
        if (!message) return ['Message es requerido'];

        return [undefined, new ContactDto(name, email, subject, message)];
    }
}