"use server"

import { EmailData, emailSchema } from "@/lib/definitions";
import { writeEmail } from "@/lib/firebase/firestore";


export async function sendEmail(data: EmailData) {
  const result = emailSchema.safeParse(data);
  if (!result.success) {
    throw new Error("Datos del formulario no válidos.");
  } else {
    await writeEmail(data);
  }
};
