"use server";

import { z } from "zod";

const emailSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  subject: z.string(),
  message: z.string(),
});

type EmailData = z.infer<typeof emailSchema>;

export async function sendEmail(data: EmailData) {
  const result = emailSchema.safeParse(data);

  if (!result.success) {
    throw new Error("Datos del formulario no válidos.");
  }
  
  // Aquí iría la lógica para enviar el email con un servicio como Resend, SendGrid, etc.
  // Por ahora, solo simulamos que el proceso tarda un segundo.
  console.log("Enviando email con los siguientes datos:", result.data);
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log("Email enviado (simulación).");

  // En un caso real, si el envío falla, lanzaríamos un error.
  // Por ejemplo:
  // const { error } = await resend.emails.send(payload);
  // if (error) {
  //   throw new Error("Fallo al enviar el email.");
  // }
}
