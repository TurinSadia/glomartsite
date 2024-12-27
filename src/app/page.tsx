import Facility from "@/components/Facilities";
import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import RecommendedSlider from "@/components/Recommended";
import TopAreas from "@/components/TopAreas";
import TopProjects from "@/components/TopProjects";

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <Facility />
      <Feature />
      <RecommendedSlider />
      <TopAreas />
      <TopProjects />
      <Footer />
    </div>
  );
}
