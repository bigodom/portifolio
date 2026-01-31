import React from "react";
import { ExternalLink, CheckCircle2 } from "lucide-react";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  impact?: string; // Novo campo para o resultado de negócio
  technologies: string[];
  onImageClick?: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  description,
  impact,
  technologies,
  onImageClick
}) => {
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col h-full">
      {/* Imagem com Overlay */}
      <div className="relative overflow-hidden cursor-pointer" onClick={onImageClick}>
        <img
          src={image}
          alt={title}
          className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <span className="text-white text-xs font-medium flex items-center gap-1">
            <ExternalLink size={14} /> Clique para ampliar
          </span>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="p-6 flex flex-col flex-grow">
        {impact && (
          <div className="mb-3 inline-flex items-center gap-1.5 py-1 px-3 rounded-full bg-green-50 text-green-700 text-xs font-bold uppercase tracking-wider">
            <CheckCircle2 size={14} />
            {impact}
          </div>
        )}
        
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
          {description}
        </p>

        {/* Tecnologias */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="text-[10px] font-semibold uppercase tracking-wider text-gray-500 bg-gray-100 px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;