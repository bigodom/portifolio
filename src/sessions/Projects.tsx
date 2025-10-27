import ProjectCard from "../components/ProjectCard"
import system_monitor from '../assets/system_monitor.png'
import gestao_frotas from '../assets/gestao_frotas.png'
import bi_gestao_frotas from '../assets/bi_gestao_frotas.png'
import almoxarifado from '../assets/almoxarife.png'
import lojinha from '../assets/lojinha.png'
import ponto from '../assets/ponto.png'

function Projects() {

    const values = [
        {
            image: system_monitor,
            title: "Sistema de Monitoramento de Sistemas",
            description: "Plataforma de monitoramento em tempo real para servidores e aplicações, com alertas personalizados e dashboards intuitivos.",
            technologies: ["React", "TypeScript", "Node.js", "Grafana", "Prometheus"]
        },
        {
            image: gestao_frotas,
            title: "Sistema de Gestão de Frotas",
            description: "Plataforma completa para controle de veículos, manutenção e consumo de combustível em tempo real.",
            technologies: ["React", "TypeScript", "Node.js", "Prisma", "Tailwind"]
        },
        {
            image: almoxarifado,
            title: "Sistema de Controle de Almoxarifado",
            description: "Plataforma completa para controle de veículos, manutenção e consumo de combustível em tempo real.",
            technologies: ["React", "TypeScript", "Node.js", "Prisma", "Tailwind"]
        },
        {
            image: lojinha,
            title: "Sistema de Vendas",
            description: "Plataforma completa para controle de veículos, manutenção e consumo de combustível em tempo real.",
            technologies: ["React", "TypeScript", "Node.js", "Prisma", "Tailwind"]
        },
        {
            image: ponto,
            title: "Sistema Gerador de Folhas de Ponto Manual",
            description: "Plataforma completa para controle de veículos, manutenção e consumo de combustível em tempo real.",
            technologies: ["React", "TypeScript", "Node.js", "Prisma", "Tailwind"]
        },
        {
            image: bi_gestao_frotas,
            title: "Sistema de Gestão de Frotas",
            description: "Plataforma completa para controle de veículos, manutenção e consumo de combustível em tempo real.",
            technologies: ["React", "TypeScript", "Node.js", "Prisma", "Tailwind"]
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
                <div className='flex justify-between flex-wrap items-center justify-center'>
                    {values.map((project, index) => (
                        <div key={index} className="w-1/2 p-4 w-100">
                            <ProjectCard
                                image={project.image}
                                title={project.title}
                                description={project.description}
                                technologies={project.technologies}
                            />
                        </div>
                    ))}

                </div>
            </section>
        </>
    )
}

export default Projects