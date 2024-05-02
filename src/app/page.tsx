import Contents from "./_components/Contents";
import Footer from "./_components/Footer";
import HeroSection from "./_components/Hero";
import Herofirst from "./_components/Herofirst";
import HowitWorks from "./_components/HowitWorks";
import Navbar from "./_components/Navbar";
import Team from "./_components/Team";
import Testimonials from "./_components/Testimonials";
export default function Home() {
  return (
  <div>
    <Navbar/>
    <Herofirst/>
   <HeroSection/>
   <HowitWorks/>
   <Contents/>
   <Team/>
   <Testimonials/>
   <Footer/>
   
  </div>
  );
}
