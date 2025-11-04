import Image from "next/image";

export function HeaderProfileImage() {
  return (
    <div className="order-1 md:order-2">
      <Image
        src="https://picsum.photos/seed/1/600/600"
        alt="Foto de perfil"
        width={600}
        height={600}
        className="aspect-square rounded-full object-cover shadow-lg"
        data-ai-hint="profile picture"
      />
    </div>
  );
}
