import Facility from "@/components/Facilities";
import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import RecommendedSlider from "@/components/Recommended";
import TopAreas from "@/components/TopAreas";

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <Facility />
      <Feature />
      <RecommendedSlider />
      <TopAreas />
      <Footer />
    </div>
  );
}
