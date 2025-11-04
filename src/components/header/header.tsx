import { Card, CardContent } from "@/components/ui/card";
import { HeaderInfo } from "./header-info";
import { HeaderProfileImage } from "./header-profile-image";

export function Header() {
  return (
    <Card className="w-full max-w-5xl rounded-2xl border-none shadow-2xl bg-card/50">
      <CardContent className="p-8 md:p-12">
        <section className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <HeaderInfo />
          <HeaderProfileImage />
        </section>
      </CardContent>
    </Card>
  );
}
