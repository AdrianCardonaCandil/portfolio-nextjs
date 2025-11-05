// This file contains type definitions for your data.
import type { IconType } from "react-icons";

export type Job = {
    title: string;
    company: string;
    period: string;
    description: string;
};

export type Project = {
    title: string;
    description: string;
    technologies: string[];
    image: {
        src: string;
        width: number;
        height: number;
        hint: string;
    };
    githubUrl: string;
    colSpan?: number;
};