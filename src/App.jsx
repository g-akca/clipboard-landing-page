import HeroSection from "./components/HeroSection";
import SnippetsSection from "./components/SnippetsSection";
import AccessSection from "./components/AccessSection";
import ToolsSection from "./components/ToolsSection";
import LogosSection from "./components/LogosSection";
import DownloadSection from "./components/DownloadSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="text-base leading-base">
      <main className="bg-top bg-no-repeat bg-[url('/images/bg-header-mobile.png')]">
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
