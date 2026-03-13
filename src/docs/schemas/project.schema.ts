export const ProjectSchema = {
  type: "object",
  properties: {
    title: {
      type: "string",
      example: "Portfolio API"
    },
    description: {
      type: "string",
      example: "API para manejar proyectos y contacto del portafolio"
    },
    technologies: {
      type: "array",
      items: {
        type: "string"
      },
      example: ["Node.js", "TypeScript", "Express"]
    },
    githubUrl: {
      type: "string",
      example: "https://github.com/sergio/portfolio-api"
    },
    demoUrl: {
      type: "string",
      example: "https://portfolio-demo.com"
    },
    image: {
      type: "string",
      example: "https://portfolio.com/images/project.png"
    }
  },
  required: ["title", "description", "technologies", "githubUrl"]
};