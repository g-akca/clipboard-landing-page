import HeroSection from "./components/HeroSection";
import SnippetsSection from "./components/SnippetsSection";
import AccessSection from "./components/AccessSection";
import ToolsSection from "./components/ToolsSection";
import LogosSection from "./components/LogosSection";
import DownloadSection from "./components/DownloadSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative text-base leading-base text-gray-500">
      <div className="absolute top-0 w-full h-90 bg-top bg-no-repeat bg-cover bg-[url('/images/bg-header-mobile.png')] opacity-40" />

      <main className="px-8 pt-30 pb-40 flex flex-col gap-38">
        <HeroSection />
        <SnippetsSection />
        <AccessSection />
        <ToolsSection />
        <LogosSection />
        <DownloadSection />
      </main>

      <Footer />
    </div>
  )
}

export default App
