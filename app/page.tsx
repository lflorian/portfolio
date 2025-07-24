import { Header } from "./sections/Header";
import { HeroSection } from "./sections/Hero";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Header />
      <HeroSection />
      <div className="max-w-7xl w-full mx-auto sm:px-10 px-5">
      </div>
    </main>
  );
}
