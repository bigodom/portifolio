import { Code, Zap, BarChart3, Monitor } from "lucide-react";
import SimpleCard from "../components/SimpleCard";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      icon: Code,
      title: "Desenvolvimento de Sites",
      description: "Sites responsivos, modernos e otimizados para conversão. Desenvolvemos desde landing pages até e-commerce completos.",
    },
    {
      icon: Zap,
      title: "Automação",
      description: "Automatize processos repetitivos e aumente a produtividade da sua empresa com soluções personalizadas.",
    },
    {
      icon: BarChart3,
      title: "Análise de Dados",
      description: "Transforme dados em insights valiosos para tomada de decisões estratégicas e crescimento do seu negócio.",
    },
    {
      icon: Monitor,
      title: "Dashboards",
      description: "Dashboards interativos e intuitivos para monitoramento em tempo real de KPIs e métricas importantes.",
    },
  ];

  return (
    <section id="servicos" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-services-title">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="text-services-subtitle">
            Oferecemos soluções completas para transformar e acelerar o crescimento do seu negócio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((value, index) => {
                const IconComponent = value.icon;
                return (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        viewport={{ once: true, amount: 0.3 }}
                        >
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
    </section>
  );
}