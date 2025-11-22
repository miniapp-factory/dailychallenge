"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const challenges = [
  "Draw a picture of your favorite animal.",
  "Write a short poem about the sky.",
  "Try a new recipe and share the result.",
  "Take a 10-minute walk and note what you see.",
  "Learn a new word and use it in a sentence."
];

export default function DailyChallenge() {
  const [challenge, setChallenge] = useState<string>("");

  useEffect(() => {
    const idx = Math.floor(Math.random() * challenges.length);
    setChallenge(challenges[idx]);
  }, []);

  const refresh = () => {
    const idx = Math.floor(Math.random() * challenges.length);
    setChallenge(challenges[idx]);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-xl font-semibold">Daily Challenge</h2>
      <p className="text-center">{challenge}</p>
      <Button variant="outline" onClick={refresh}>Refresh</Button>
    </div>
  );
}
