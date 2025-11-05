import { Code, Database, Bot, LucideProps } from "lucide-react";

export type Project = {
  title: string;
  description: string;
  technologies: React.ComponentType<LucideProps>[];
  image: {
    src: string;
    width: number;
    height: number;
    hint: string;
  };
  githubUrl: string;
  colSpan?: number;
};

export const projects: Project[] = [
  {
    title: "Plataforma de E-learning",
    description:
      "Una plataforma interactiva para cursos online con seguimiento del progreso y certificación.",
    technologies: [Code, Database],
    image: {
      src: "https://picsum.photos/seed/10/600/400",
      width: 600,
      height: 400,
      hint: "web application",
    },
    githubUrl: "https://github.com",
    colSpan: 2,
  },
  {
    title: "App de Fitness",
    description:
      "Aplicación móvil para registrar entrenamientos, seguir dietas y conectar con entrenadores.",
    technologies: [Code],
    image: {
      src: "https://picsum.photos/seed/11/600/400",
      width: 600,
      height: 400,
      hint: "mobile app",
    },
    githubUrl: "https://github.com",
  },
  {
    title: "Dashboard de Análisis",
    description:
      "Herramienta de visualización de datos para monitorizar métricas de negocio en tiempo real.",
    technologies: [Code, Database],
    image: {
      src: "https://picsum.photos/seed/12/600/400",
      width: 600,
      height: 400,
      hint: "dashboard analytics",
    },
    githubUrl: "https://github.com",
  },
  {
    title: "E-commerce de Moda",
    description:
      "Tienda online con un diseño moderno, pasarela de pago integrada y gestión de inventario.",
    technologies: [Code, Database, Bot],
    image: {
      src: "https://picsum.photos/seed/13/600/400",
      width: 600,
      height: 400,
      hint: "e-commerce",
    },
    githubUrl: "https://github.com",
    colSpan: 2,
  },
];
