"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Plus } from "lucide-react";

export default function Home() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <Card className="w-full max-w-md text-center shadow-2xl">
        <CardHeader>
          <CardTitle className="font-headline text-3xl font-bold tracking-tight text-foreground">
            Welcome to Click Counter!!
          </CardTitle>
          <CardDescription>
            Click the button below to increase the count.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-8 pt-2">
          <div className="text-center">
            <p className="text-lg text-muted-foreground">Current Count:</p>
            <p
              className="font-headline text-8xl font-bold text-foreground"
              aria-live="polite"
            >
              {count}
            </p>
          </div>
          <Button
            onClick={handleIncrement}
            size="lg"
            className="w-full max-w-xs transform-gpu transition-transform duration-150 ease-in-out active:scale-95"
            aria-label="Increment counter"
          >
            <Plus className="mr-2 h-5 w-5" />
            Add One
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}
