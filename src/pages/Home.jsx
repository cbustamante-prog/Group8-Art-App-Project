import Nav from "@/components/nexora/Nav";
import Hero from "@/components/nexora/Hero";
import About from "@/components/nexora/About";
import Explore from "@/components/nexora/Explore";
import Showcase from "@/components/nexora/Showcase";
import Spotlight from "@/components/nexora/Spotlight";
import Interactive from "@/components/nexora/Interactive";
import Insights from "@/components/nexora/Insights";
import Community from "@/components/nexora/Community";
import Reflection from "@/components/nexora/Reflection";
import Faq from "@/components/nexora/Faq";
import Contact from "@/components/nexora/Contact";
import Creators from "@/components/nexora/Creators";
import References from "@/components/nexora/References";
import Footer from "@/components/nexora/Footer";

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
        <Contact />
        <Creators />
        <References />
      </main>
      <Footer />
    </div>
  );
}