import Nav from "@/components/music-exhibition/Nav";
import Hero from "@/components/music-exhibition/Hero";
import About from "@/components/music-exhibition/About";
import Explore from "@/components/music-exhibition/Explore";
import Showcase from "@/components/music-exhibition/Showcase";
import Spotlight from "@/components/music-exhibition/Spotlight";
import Interactive from "@/components/music-exhibition/Interactive";
import Insights from "@/components/music-exhibition/Insights";
import Community from "@/components/music-exhibition/Community";
import Reflection from "@/components/music-exhibition/Reflection";
import Faq from "@/components/music-exhibition/Faq";
import Creators from "@/components/music-exhibition/Creators";
import References from "@/components/music-exhibition/References";
import Footer from "@/components/music-exhibition/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Nav />
      <main>
        <Hero />
        <About />
        <Explore />
        <Showcase />
        <Spotlight />
        <Interactive />
        <Insights />
        <Community />
        <Reflection />
        <Faq />
        <Creators />
        <References />
      </main>
      <Footer />
    </div>
  );
}