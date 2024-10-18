// page.tsx/blog.js

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
const blog = () => {
  return (
    <>
      <Head>
        <title>blog</title>
        <meta name="description" content="Learn more about us." />
      </Head>
      <div>
        <h1>About Us</h1>
        <p>Welcome to our about page! We are dedicated to providing the best service.</p>
      </div>
    </>
  );
};

export default blog;
