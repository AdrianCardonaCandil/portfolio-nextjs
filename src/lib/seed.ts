// File used to populate the database the first time the application is run.

import { Job } from "./definitions";
import { Project } from "./definitions";
import { 
    SiPytorch, 
    SiExpress, 
    SiFirebase, 
    SiKotlin, 
    SiPython,
    SiJavascript,
    SiDocker
} from "react-icons/si";

const jobs: Job[] = [
    {
        title: 'Desarrollador de Sofware en Prácticas',
        company: 'SIC4Change',
        period: '09/25 - Actual',
        description: `Proyecto de desarrollo de software basado en la
        reinvención de la plataforma Savia de la organización SIC4Change
        utilizando tecnologías actuales como NextJS, Google Firebase,
        Google Cloud Services.`
    }
]

const projects: Project[] = [
    {
        title: 'Plant Buddies',
        description: `Aplicación móvil nativa desarrollada en Kotlin para
        dispositivos Android. Dedicada al cuidado de plantas`,
        technologies: [
            SiPytorch,
            SiExpress,
            SiFirebase,
            SiKotlin,
            SiPython,
            SiJavascript,
            SiDocker
        ],
        image: {
            src: 'https://firebasestorage.googleapis.com/v0/b/porfolio-nextjs.firebasestorage.app/o/plant-buddies.jpg?alt=media&token=967b7305-1625-4df4-b8f8-285bb9aa96b4',
            width: 600,
            height: 400,
            hint: 'Imagen de portada para el repositorio Plant Buddies'
        },
        githubUrl: 'https://github.com/AdrianCardonaCandil/Plant-Buddies',
        colSpan: 2
    }
]