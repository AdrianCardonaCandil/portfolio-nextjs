// File used to populate the database the first time the application is run.
import { Job } from "./definitions";
import { Project } from "./definitions";

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
            'SiPytorch',
            'SiExpress',
            'SiFirebase',
            'SiKotlin',
            'SiPython',
            'SiJavascript',
            'SiDocker'
        ],
        image: {
            src: 'https://firebasestorage.googleapis.com/v0/b/portfolio-nextjs-sic.firebasestorage.app/o/plant-buddies.jpg?alt=media&token=c336a876-a33f-4319-8019-b068aeb9a9ac',
            width: 600,
            height: 400,
            hint: 'Imagen de portada para el repositorio Plant Buddies'
        },
        githubUrl: 'https://github.com/AdrianCardonaCandil/Plant-Buddies',
        colSpan: 2
    },
    {
        title: 'MQTT Parking Slot Detector',
        description: `Desarrollo de un sistema IoT que permita detectar y monitorizar
        en tiempo real el estado de ocupación de plazas de aparcamiento mediante sensores
        de ultrasonido y tecnología LoRa`,
        technologies: [
            'SiMqtt',
            'SiArduino',
            'SiJavascript',
            'SiHtml5',
            'SiCss3',
            'SiPython'
        ],
        image: {
            src: 'https://firebasestorage.googleapis.com/v0/b/portfolio-nextjs-sic.firebasestorage.app/o/mqtt-parking-slot-detector.jpg?alt=media&token=05d60a24-1d4f-4e69-bfc4-7f09d125285a',
            width: 600,
            height: 400,
            hint: 'Imagen de portada para el repositorio MQTT Parking Slot Detector'
        },
        githubUrl: 'https://github.com/AdrianCardonaCandil/MQTTParkingSlotDetector',
    },
    {
        title: 'Image Viewer',
        description: `Desarrollo de una galería deslizable de imágenes utilizando la librería
        Java Swing`,
        technologies: [ 'DiJava' ],
        image: {
            src: 'https://firebasestorage.googleapis.com/v0/b/portfolio-nextjs-sic.firebasestorage.app/o/image-viewer.jpg?alt=media&token=1375d1f7-4f71-4683-9d59-5ad0639534ec',
            width: 600,
            height: 400,
            hint: 'Imagen de portada para el repositorio Image Viewer'
        },
        githubUrl: 'https://github.com/AdrianCardonaCandil/ImageViewer'
    },
    {
        title: 'Anitrack',
        description: `Aplicación nativa desarrollada en Kotlin para la gestión y seguimiento de
        contenido audiovisual japonés`,
        technologies: [
            'SiKotlin',
            'SiFirebase'
        ],
        image: {
            src: 'https://firebasestorage.googleapis.com/v0/b/portfolio-nextjs-sic.firebasestorage.app/o/anitrack.jpg?alt=media&token=2162391c-8be9-4eba-8cf1-fbca5bd39a7f',
            width: 600,
            height: 400,
            hint: 'Imagen de portada para el repositorio Anitrack'
        },
        githubUrl: 'https://github.com/AdrianCardonaCandil/Anitrack',
        colSpan: 2
    }
]

export { jobs, projects }