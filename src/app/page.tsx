import Contents from "./_components/Contents";
import Footer from "./_components/Footer";
import HeroSection from "./_components/Hero";
import Herofirst from "./_components/Herofirst";
import HowitWorks from "./_components/HowitWorks";
import Navbar from "./_components/Navbar";
// import Team from "./_components/Team";
import Testimonials from "./_components/Testimonials";
import Aurora from "./_components/Aurora";
import Contact from "./_components/Contact";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Herofirst />
      <HeroSection />
      <HowitWorks />
      <Aurora />
      <Contents />
      {/* <Team/> */}
      <Testimonials />
      <Contact/>
      <Footer />
    </div>
  );
}
