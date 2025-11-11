// This file contains type definitions for your data.
import { z } from "zod";

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

export const emailSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  subject: z.string(),
  message: z.string(),
});

export type EmailData = z.infer<typeof emailSchema>;