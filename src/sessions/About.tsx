import { CheckCircle, Users, Target, Lightbulb } from "lucide-react";
import SimpleCard from "../components/SimpleCard";
import { motion } from "framer-motion";

export default function About() {
    const values = [
        {
            icon: Target,
            title: "Foco no Resultado",
            description: "Desenvolvemos soluções que geram valor real para o seu negócio"
        },
        {
            icon: Lightbulb,
            title: "Inovação",
            description: "Utilizamos as tecnologias mais modernas e eficientes do mercado"
        },
        {
            icon: Users,
            title: "Parceria",
            description: "Trabalhamos como uma extensão da sua equipe, sempre próximos"
        },
        {
            icon: CheckCircle,
            title: "Qualidade",
            description: "Entregamos código limpo, documentado e de alta performance"
        }
    ];

    return (
        <section id="sobre" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6" data-testid="text-about-title">
                            Sobre a Maltech
                        </h2>

                        <p className="text-xl text-muted-foreground mb-6" data-testid="text-about-intro">
                            Somos uma empresa especializada em desenvolvimento de sistemas,
                            focada em transformar ideias em soluções digitais eficientes e inovadoras.
                        </p>

                        <p className="text-muted-foreground mb-8" data-testid="text-about-description">
                            Com mais de 5 anos de experiência no mercado, já entregamos mais de 50 projetos
                            para empresas de diversos segmentos. Nossa equipe combina expertise técnica com
                            visão de negócios para criar soluções que realmente fazem a diferença.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <CheckCircle className="h-5 w-5 text-primary" />
                                <span data-testid="text-feature-1">Desenvolvimento ágil e eficiente</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <CheckCircle className="h-5 w-5 text-primary" />
                                <span data-testid="text-feature-2">Suporte técnico especializado</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <CheckCircle className="h-5 w-5 text-primary" />
                                <span data-testid="text-feature-3">Soluções personalizadas para cada cliente</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <CheckCircle className="h-5 w-5 text-primary" />
                                <span data-testid="text-feature-4">Tecnologias modernas e seguras</span>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {values.map((value, index) => {
                            const IconComponent = value.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    viewport={{ once: true, amount: 0.3 }}>
                                    <SimpleCard
                                        key={index}
                                        icon={IconComponent}
                                        title={value.title}
                                        description={value.description}
                                    />
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}