import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ContentRow from "@/components/ContentRow";
import PremiumSection from "@/components/PremiumSection";
import Footer from "@/components/Footer";

import movie1 from "@/assets/movie1.jpg";
import movie2 from "@/assets/movie2.jpg";
import movie3 from "@/assets/movie3.jpg";
import movie4 from "@/assets/movie4.jpg";
import movie5 from "@/assets/movie5.jpg";
import sport1 from "@/assets/sport1.jpg";
import sport2 from "@/assets/sport2.jpg";
import show1 from "@/assets/show1.jpg";

const Index = () => {
  const movies = [
    { id: 1, image: movie1, title: "Superhero Chronicles" },
    { id: 2, image: movie2, title: "Dragon's Quest" },
    { id: 3, image: movie3, title: "Love in Paris" },
    { id: 4, image: movie4, title: "Midnight Detective" },
    { id: 5, image: movie5, title: "Adventure Island" },
  ];

  const sports = [
    { id: 1, image: sport1, title: "Live Cricket: India vs Australia" },
    { id: 2, image: sport2, title: "Premier League Football" },
    { id: 3, image: sport1, title: "T20 World Cup Highlights" },
    { id: 4, image: sport2, title: "UEFA Champions League" },
    { id: 5, image: sport1, title: "IPL Cricket 2024" },
  ];

  const tvShows = [
    { id: 1, image: show1, title: "The Office Chronicles" },
    { id: 2, image: movie4, title: "Mystery Files" },
    { id: 3, image: movie2, title: "Fantasy Realms" },
    { id: 4, image: show1, title: "Modern Family" },
    { id: 5, image: movie3, title: "Romance Stories" },
  ];

  const disney = [
    { id: 1, image: movie5, title: "Magical Adventures" },
    { id: 2, image: movie2, title: "Enchanted Kingdom" },
    { id: 3, image: movie5, title: "Toy Stories" },
    { id: 4, image: movie2, title: "Frozen Tales" },
    { id: 5, image: movie5, title: "Pixar Originals" },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      
      <div className="space-y-8 pb-16">
        <ContentRow title="Latest & Greatest" items={movies} />
        <ContentRow title="Live Sports" items={sports} />
        <ContentRow title="Popular TV Shows" items={tvShows} />
        <ContentRow title="Disney+ Originals" items={disney} />
      </div>

      <PremiumSection />
      <Footer />
    </div>
  );
};

export default Index;
