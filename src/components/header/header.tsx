import { Card, CardContent } from "@/components/ui/card";
import { HeaderInfo } from "./header-info";
import { HeaderProfileImage } from "./header-profile-image";

export function Header() {
  return (
    <Card className="w-full max-w-4xl rounded-2xl shadow-2xl">
      <CardContent className="p-6">
        <section className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <HeaderInfo />
          <HeaderProfileImage />
        </section>
      </CardContent>
    </Card>
  );
}
