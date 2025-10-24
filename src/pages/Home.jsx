import BookedServices from "../sections/BookedServices";
import HeroSection from "../sections/HeroSection";
import HomeCareSection from "../sections/HomeCareSection";
import Navbar from "./../components/navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <HomeCareSection />
      <BookedServices />
    </>
  );
}
