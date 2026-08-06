import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";
import SymbolRain from "@/components/SymbolRain";
import Divider from "@/components/Divider";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Навигация */}
      <Navbar />

      {/* Эффекты фона */}
      <CursorGlow />
      <SymbolRain />

      {/* Главный экран */}
      <Hero />

      {/* Информация о клане */}
      <Divider symbol="◇" />
      <About />

      {/* Статистика */}
      <Divider symbol="◈" />
      <Stats />

      {/* FAQ */}
      <Divider symbol="◆" />
      <FAQ />

      {/* Подвал */}
      <Divider symbol="◇" />
      <Footer />
    </main>
  );
}