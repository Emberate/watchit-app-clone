import { Play, Plus } from "lucide-react";
import { Button } from "./ui/button";
import heroBanner from "@/assets/hero-banner.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src={heroBanner} 
          alt="Featured Content" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
      </div>
      
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-end pb-20">
        <div className="max-w-2xl space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold">
            Interstellar Odyssey
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Join humanity's greatest adventure across the cosmos. A journey beyond imagination awaits.
          </p>
          <div className="flex gap-4 pt-4">
            <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90">
              <Play className="mr-2 h-5 w-5" fill="currentColor" />
              Watch Now
            </Button>
            <Button size="lg" variant="secondary" className="hover:bg-secondary/80">
              <Plus className="mr-2 h-5 w-5" />
              My List
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
