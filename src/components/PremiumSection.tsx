import { Check } from "lucide-react";
import { Button } from "./ui/button";

const PremiumSection = () => {
  const features = [
    "Watch on 4 devices at a time",
    "Full HD & 4K content",
    "Download content to watch offline",
    "Access to premium originals",
    "Ad-free entertainment"
  ];

  return (
    <section className="py-20 bg-gradient-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Upgrade to Premium
          </h2>
          <p className="text-lg text-foreground/90">
            Unlock unlimited entertainment with our premium subscription
          </p>
          
          <div className="bg-background/10 backdrop-blur-sm rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 text-left">
                  <div className="bg-foreground/20 rounded-full p-1">
                    <Check className="h-5 w-5" />
                  </div>
                  <span className="font-medium">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="space-y-4">
              <div className="text-3xl font-bold">
                ₹299 <span className="text-lg font-normal">/month</span>
              </div>
              <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 w-full md:w-auto px-12">
                Subscribe Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumSection;
