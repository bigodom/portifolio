import ProjectCard from "../components/ProjectCard"
import system_monitor from '../assets/system_monitor.png'
import gestao_frotas from '../assets/gestao_frotas.png'
import bi_gestao_frotas from '../assets/bi_gestao_frotas.png'
import almoxarifado from '../assets/almoxarife.png'
import lojinha from '../assets/lojinha.png'
import ponto from '../assets/ponto.png'
import { useState } from "react"
import { X } from "lucide-react";

function Projects() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const values = [
        {
            image: gestao_frotas,
            title: "Gestão de Frotas",
            description: "Plataforma completa para controle de veículos, manutenção e consumo de combustível em tempo real.",
            technologies: ["React", "TypeScript", "Node.js", "Postgresql", "Tailwind"]
        },
        {
            image: almoxarifado,
            title: "Controle de Estoque para Almoxarifado",
            description: "Controle de entrada de suprimentos e saída por funcionário.",
            technologies: ["React", "TypeScript", "Node.js", "Prisma", "Bootstrap"]
        },
        {
            image: lojinha,
            title: "Frente PDV",
            description: "Frende de venda PDV online com controle de estoque, saída, impressão de cupom e dashboard integrado.",
            technologies: ["React", "TypeScript", "Fast API", "SQLAlchemy", "Bootstrap"]
        },
        {
            image: ponto,
            title: "Gerador e Controlador de Folhas de Ponto Manual",
            description: "Sistema para criação e controle de folhas de ponto manual.",
            technologies: ["React", "TypeScript", "Node.js", "Postgresql", "Tailwind"]
        },
        {
            image: bi_gestao_frotas,
            title: "Sistema de Gestão de Frotas",
            description: "Plataforma completa para controle de veículos, manutenção e consumo de combustível em tempo real.",
            technologies: ["React", "TypeScript", "Node.js", "Prisma", "Tailwind"]
        },
        {
            image: system_monitor,
            title: "Painel de Monitoramento de Sistemas",
            description: "Painel de monitoramento em tempo real para servidores e aplicações, com alertas personalizados e dashboards intuitivos.",
            technologies: ["React", "TypeScript", "Node.js", "Grafana", "Prometheus"]
        },
    ];
    return (
        <>
            <section id="trabalhos" className="max-w-7xl mx-auto items-center py-24">
                <div className="text-center mb-16">
                    <h2
                        className="text-3xl md:text-4xl font-bold text-foreground mb-4"
                        data-testid="text-portfolio-title"
                    >
                        Nossos Trabalhos
                    </h2>
                    <p
                        className="text-xl text-muted-foreground max-w-2xl mx-auto"
                        data-testid="text-portfolio-subtitle"
                    >
                        Conheça alguns dos projetos que desenvolvemos para nossos clientes
                    </p>
                </div>
                <div className='flex flex-wrap items-center gap-8 justify-center'>
                    {values.map((project, index) => (
                        <div key={index} className="p-4 w-100">
                            <ProjectCard
                                image={project.image}
                                title={project.title}
                                description={project.description}
                                technologies={project.technologies}
                                onImageClick={() => setSelectedImage(project.image)}
                            />
                        </div>
                    ))}

                </div>
            </section>
            {/* Modal (menu suspenso) */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
                    onClick={() => setSelectedImage(null)}
                >
                    <div
                        className="relative bg-white rounded-lg shadow-lg max-w-3xl w-full mx-4 p-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
                        >
                            <X size={24} />
                        </button>
                        <img
                            src={selectedImage}
                            alt="Imagem do projeto"
                            className="rounded-lg w-full h-auto object-contain"
                        />
                    </div>
                </div>
            )}
        </>
    )
}

export default Projects