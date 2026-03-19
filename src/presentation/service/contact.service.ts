import { envs } from '../../config';
import { CustomError, PrismaError } from '../../domain';
import { ContactDto } from '../../domain/dtos/contact.dto';
import { contactEmailTemplate, PrismaAdapter } from '../../infrastructure';
import { EmailAdapter } from '../../infrastructure/email/email.adapter';


export class ContactService {

    private prisma = PrismaAdapter.client;

    constructor(
        private emailAdapter: EmailAdapter
    ){}


    async create ( contactDto: ContactDto ) {

        await this.validateEmailCooldown(contactDto.email)

        try {

            const contact = await this.prisma.contactMessage.create({
                data: {
                    ...contactDto
                }
            })

            await this.messageEmail(contactDto);
            return contact;
            
        } catch (error: any) {
            console.log({error});
            PrismaError.handle(error);
            
        }
    }

    private async messageEmail(contactDto: ContactDto) {

        const { name, email, subject, message } = contactDto;

        const htmlBody = contactEmailTemplate(name, email, subject, message);

        try {

            const sent = await this.emailAdapter.sendEmail({
                to: "sergio200206mayo@gmail.com",
                subject: `Nuevo mensaje de ${name} - ${email}`,
                htmlBody
            });

            if (!sent) throw CustomError.internalServer('Failed to send email');

            return true;

        } catch (error) {
            console.error(error);
            return false;
        }
    }

    private async validateEmailCooldown(email: string) {

        const lastMessage = await this.prisma.contactMessage.findFirst({
            where: { email },
            orderBy: {
                createdAt: 'desc'
            }
        });

        if (!lastMessage) return;

        const FIVE_HOURS = 5 * 60 * 60 * 1000;

        const timePassed = Date.now() - lastMessage.createdAt.getTime();

        if (timePassed < FIVE_HOURS) {

            const remainingTime = FIVE_HOURS - timePassed;

            const hours = Math.floor(remainingTime / (60 * 60 * 1000));
            const minutes = Math.ceil(
                (remainingTime % (60 * 60 * 1000)) / (60 * 1000)
            );

            let message = '';

            if (hours > 0 && minutes > 0) {
                message = `${hours} hora${hours > 1 ? 's' : ''} y ${minutes} minuto${minutes > 1 ? 's' : ''}`;
            } 
            else if (hours > 0) {
                message = `${hours} hora${hours > 1 ? 's' : ''}`;
            } 
            else {
                message = `${minutes} minuto${minutes > 1 ? 's' : ''}`;
            }

            throw CustomError.badRequest(
                `Debes esperar ${message} para enviar otro mensaje`
            );
        }

        }

}
