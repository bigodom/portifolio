import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface PostCardProps {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image?: string;
}

const PostCard = ({ id, title, excerpt, category, date, image }: PostCardProps) => {
  return (
    <div className="overflow-hidden group hover:shadow-hover transition-all duration-300 animate-fade-in border-border">
      <div className="aspect-video overflow-hidden bg-muted">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center gap-2">

          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>{date}</span>
          </div>
        </div>
        
        <h3 className="text-xl font-bold line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
      </div>
      
      <div>
        <p className="text-muted-foreground line-clamp-3">
          {excerpt}
        </p>
      </div>
      
      <div>
        <Link to={`/blog/${id}`} className="w-full">
          <button className="w-full group/btn">
            Ler mais
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
