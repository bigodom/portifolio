import React from "react";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  technologies: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  description,
  technologies,
}) => {
  return (
    <div className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-700">
      {/* Imagem */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Conteúdo */}
      <div className="p-5">
        <h2 className="text-xl font-semibold text-white mb-2">{title}</h2>
        <p className="text-gray-300 text-sm leading-relaxed mb-4">
          {description}
        </p>

        {/* Tecnologias */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="text-xs font-medium text-gray-200 bg-gray-700/60 px-3 py-1 rounded-full border border-gray-600 hover:bg-indigo-600 hover:text-white transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Efeito de brilho sutil */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-indigo-500/10 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default ProjectCard;
