// src/components/Trainer.tsx
"use client"; // This directive is ESSENTIAL for interactivity in Next.js

import { useState, useEffect } from "react";
import { vocabulary, uiStrings } from "@/lib/data";

export default function Trainer() {
  // --- STATE MANAGEMENT ---
  // We use useState to manage variables that change and re-render the UI
  const [score, setScore] = useState(0);
  const [currentWord, setCurrentWord] = useState<any>(null); // Replace 'any' later
  // ... we will add many more state variables here

  // --- ON-LOAD LOGIC ---
  // useEffect runs once when the component is first loaded
  useEffect(() => {
    // Here we will load settings and start the session
    console.log("Trainer component loaded!");
    setCurrentWord(vocabulary[0]); // Just for testing
  }, []); // The empty array [] means "run only once"

  // --- RENDERED UI ---
  return (
    <div>
      {/* Card Section */}
      <section className="card">
        <div
          id="word-to-translate"
          className="text-4xl font-bold min-h-[50px] my-5"
        >
          {currentWord ? currentWord.english : "Loading..."}
        </div>
        <p
          id="hint-text"
          className="text-secondary italic min-h-[48px] mb-4 leading-relaxed"
        ></p>
        <input
          id="answer-input"
          type="text"
          placeholder="Type your answer here..."
          className="w-full p-3 text-lg border-2 border-gray-300 rounded-lg text-center"
        />
        <div className="buttons mt-4 flex gap-2 justify-center">
          <button id="check-btn" className="btn-primary w-full">
            Check
          </button>
        </div>
      </section>

      {/* Other sections will go below */}
    </div>
  );
}
