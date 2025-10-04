import { Play } from "lucide-react";

interface ContentCardProps {
  image: string;
  title: string;
}

const ContentCard = ({ image, title }: ContentCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-card transition-all duration-300 hover:scale-105 hover:z-10 cursor-pointer">
      <div className="aspect-video relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-card opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-foreground/90 rounded-full p-4">
            <Play className="h-8 w-8 text-background" fill="currentColor" />
          </div>
        </div>
      </div>
      <div className="p-3">
        <h3 className="font-medium text-sm truncate">{title}</h3>
      </div>
    </div>
  );
};

export default ContentCard;
