"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <Card className="w-full max-w-md text-center shadow-2xl">
        <CardHeader>
          <CardTitle className="font-headline text-3xl font-bold tracking-tight text-foreground">
            Welcome to Portfolio-NextJS
          </CardTitle>
          <CardDescription>
            This is a portfolio website.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-8 pt-2">
          <p>Portfolio content will go here.</p>
        </CardContent>
      </Card>
    </main>
  );
}
