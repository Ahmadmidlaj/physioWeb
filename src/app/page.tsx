import Contents from "./_components/Contents";
import HeroSection from "./_components/Hero";
import HowitWorks from "./_components/HowitWorks";
import Navbar from "./_components/Navbar";
export default function Home() {
  return (
  <div>
    <Navbar/>
   <HeroSection/>
   <HowitWorks/>
   <Contents/>
  </div>
  );
}
