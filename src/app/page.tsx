import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import LogoTicker from "@/components/LogoTicker";
import NoCash from "@/components/NoCash";
import OurStory from "@/components/OurStory";
import RSVP from "@/components/RSVP";
import WhenWhere from "@/components/WhenWhere";

export default function Home() {
  return (
    <main>
      <Hero />
      <LogoTicker />
      <Introduction />
      <WhenWhere />
      <OurStory />
      <RSVP />
      <NoCash />
    </main>
  );
}
