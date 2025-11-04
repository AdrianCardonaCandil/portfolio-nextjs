export type Job = {
  title: string;
  company: string;
  period: string;
  description: string;
};

export const jobs: Job[] = [
  {
    title: "Ingeniero de Software Senior",
    company: "Tech Solutions Inc.",
    period: "2020 - Presente",
    description:
      "Desarrollo y mantenimiento de aplicaciones web a gran escala utilizando React, Node.js y GraphQL. Lideré un equipo de 5 desarrolladores en el proyecto del nuevo dashboard de cliente.",
  },
  {
    title: "Desarrollador Full-Stack",
    company: "Innovate Co.",
    period: "2018 - 2020",
    description:
      "Creación de APIs RESTful y microservicios con Python (Django) y despliegue en AWS. Trabajé en la integración de pasarelas de pago y sistemas de autenticación de terceros.",
  },
  {
    title: "Desarrollador Frontend Junior",
    company: "Web Crafters",
    period: "2017 - 2018",
    description:
      "Maquetación de interfaces de usuario responsive a partir de diseños en Figma. Optimización del rendimiento y la velocidad de carga de los sitios web de la empresa.",
  },
];
