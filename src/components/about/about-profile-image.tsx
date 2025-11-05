import Image from "next/image";

export function AboutProfileImage() {
  return (
    <div className="order-1 flex justify-center md:order-2">
      <Image
        src="https://picsum.photos/seed/1/400/400"
        alt="Foto de perfil"
        width={400}
        height={400}
        className="aspect-square rounded-full object-cover shadow-lg"
        data-ai-hint="profile picture"
        priority
      />
    </div>
  );
}
