import { ContactForm } from "./contact-form";

export function Contact() {
  return (
    <section id="contact" className="w-full py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Contacto
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            ¿Tienes alguna pregunta o quieres trabajar juntos? Envíame un
            mensaje.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-xl">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
