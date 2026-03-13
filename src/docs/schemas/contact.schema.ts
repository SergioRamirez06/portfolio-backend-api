export const ContactSchema = {
  type: "object",
  properties: {
    name: {
      type: "string",
      example: "Sergio"
    },
    email: {
      type: "string",
      example: "sergio@email.com"
    },
    subject: {
      type: "string",
      example: "Oferta laboral"
    },
    message: {
      type: "string",
      example: "Hola queremos hablar contigo"
    }
  },
  required: ["name", "email", "subject", "message"]
};