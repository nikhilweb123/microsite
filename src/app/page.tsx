import PageLoader from "./components/PageLoader";
import SmoothScrollProvider from "./components/SmoothScrollProvider";
import ScrollProgressBar from "./components/ScrollProgressBar";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import HeroSection from "./components/sections/HeroSection";
import AboutPreview from "./components/sections/AboutPreview";
import ArtisticPractice from "./components/sections/ArtisticPractice";
import WorksGallery from "./components/sections/WorksGallery";
import Exhibitions from "./components/sections/Exhibitions";
import MaterialProcess from "./components/sections/MaterialProcess";
import Philosophy from "./components/sections/Philosophy";
import Workshops from "./components/sections/Workshops";
import Footer from "./components/sections/Footer";


export default function Home() {
  return (
    <SmoothScrollProvider>
      {/* Overlays */}
      <PageLoader />
      <CustomCursor />
      <ScrollProgressBar />

      {/* Fixed nav */}
      <Navbar />

      {/* Page content */}
      <main>
        <HeroSection />
        <AboutPreview />
        <ArtisticPractice />
        <WorksGallery />
        <Exhibitions />
        <MaterialProcess />
        <Philosophy />
        <Workshops />
        <Footer />
      </main>
    </SmoothScrollProvider>
  );
}
