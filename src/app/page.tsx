// src/app/page.tsx
import Header from "@/components/Header";
import Trainer from "@/components/Trainer";

export default function Home() {
  return (
    <main className="bg-white p-10 rounded-lg shadow-md w-full max-w-xl text-center">
      <Header />
      <Trainer />
    </main>
  );
}
