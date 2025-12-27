import ProjectCard from "../components/ProjectCard"
import system_monitor from '../assets/system_monitor.png'
import gestao_frotas from '../assets/gestao_frotas.png'
import bi_gestao_frotas from '../assets/bi_gestao_frotas.png'
import almoxarifado from '../assets/almoxarife.png'
import lojinha from '../assets/lojinha.png'
import ponto from '../assets/ponto.png'
import { useState } from "react"
import { X, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

function Projects() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const projects = [
        {
            image: gestao_frotas,
            title: "Gestão Estratégica de Frotas",
            impact: "Redução de 15% em custos de combustível",
            description: "Plataforma robusta para controlo de manutenção e consumo, transformando custos variáveis em previsibilidade financeira.",
            technologies: ["React", "Node.js", "PostgreSQL"]
        },
        {
            image: bi_gestao_frotas,
            title: "BI & Analytics para Logística",
            impact: "Decisões baseadas em dados reais",
            description: "Dashboard avançado que consolida KPIs críticos, permitindo identificar gargalos operacionais em segundos.",
            technologies: ["Power BI", "DAX", "SQL"]
        },
        {
            image: lojinha,
            title: "Frente de Caixa (PDV) Digital",
            impact: "Aumento na velocidade de atendimento",
            description: "Sistema de vendas com gestão de stock em tempo real e emissão de talões, otimizado para alta rotatividade.",
            technologies: ["FastAPI", "React", "TypeScript"]
        },
        {
            image: almoxarifado,
            title: "Controlo Inteligente de Inventário",
            impact: "Zero perdas por falta de stock",
            description: "Gestão automatizada de entrada e saída de suprimentos com alertas de reposição e histórico por colaborador.",
            technologies: ["React", "PostgreSQL", "Bootstrap"]
        },
        {
            image: ponto,
            title: "Automação de Folhas de Ponto",
            impact: "Economia de horas do RH",
            description: "Sistema para geração e controlo de pontos manuais, garantindo conformidade e organização documental.",
            technologies: ["TypeScript", "Tailwind", "Node.js"]
        },
        {
            image: system_monitor,
            title: "Monitorização de Infraestrutura",
            impact: "Disponibilidade 24/7 garantida",
            description: "Painel de controlo em tempo real para servidores e aplicações com sistema de alertas preventivos.",
            technologies: ["React", "Real-time Data", "Node.js"]
        },
    ];

    return (
        <>
            <section id="trabalhos" className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                        <div className="max-w-2xl">
                            <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-3">
                                Portefólio de Resultados
                            </h2>
                            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                                Soluções que geram <span className="text-blue-600">valor real</span> para o seu negócio
                            </h3>
                        </div>
                        {/* Substitua o bloco de texto explicativo por este: */}
                        <div className="max-w-sm relative">
                            {/* O "Balão" de destaque */}
                            <div className="relative bg-blue-50 border border-blue-100 p-5 rounded-2xl shadow-sm">
                                {/* Pequeno detalhe/triângulo para parecer um balão de fala (opcional) */}
                                <div className="absolute -bottom-2 left-8 w-4 h-4 bg-blue-50 border-r border-b border-blue-100 rotate-45"></div>

                                <p className="text-blue-900 leading-relaxed font-medium relative z-10">
                                    "Cada projeto é desenvolvido com um objetivo claro: resolver problemas
                                    complexos com tecnologia simples e eficiente."
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <ProjectCard
                                    {...project}
                                    onImageClick={() => setSelectedImage(project.image)}
                                />
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <p className="text-gray-600 mb-6">Precisa de uma solução personalizada para a sua empresa?</p>
                        <a
                            href="#contato"
                            className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-colors group"
                        >
                            Solicitar orçamento para projeto similar
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>
            </section>

            {/* Modal de Visualização */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-gray-900/90 backdrop-blur-sm flex items-center justify-center z-[100] p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative max-w-5xl w-full bg-white rounded-xl overflow-hidden shadow-2xl">
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full backdrop-blur-md transition-colors z-10"
                        >
                            <X size={24} />
                        </button>
                        <img
                            src={selectedImage}
                            alt="Visualização do Projeto"
                            className="w-full h-auto object-contain max-h-[85vh]"
                        />
                    </div>
                </div>
            )}
        </>
    )
}

export default Projects