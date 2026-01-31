import { CheckCircle, Zap, ShieldCheck, BarChart } from "lucide-react";
import SimpleCard from "../components/SimpleCard";
import { motion } from "framer-motion";

export default function About() {
    const values = [
        {
            icon: Zap,
            title: "Eficiência Operacional",
            description: "Substituímos processos manuais lentos por sistemas automatizados que libertam o tempo da sua equipa."
        },
        {
            icon: BarChart,
            title: "Cultura de Dados",
            description: "Criamos dashboards que transformam dados brutos em decisões estratégicas para aumentar o seu lucro."
        },
        {
            icon: ShieldCheck,
            title: "Tecnologia Segura",
            description: "Desenvolvemos soluções robustas e escaláveis, preparadas para suportar o crescimento do seu negócio."
        },
        {
            icon: CheckCircle,
            title: "Foco no ROI",
            description: "Cada linha de código é pensada para gerar retorno sobre o investimento e valor real para a empresa."
        }
    ];

    return (
        <section id="sobre" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-3">
                            Porquê a GPY Soluções?
                        </h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            Ajudamos empresas a escalarem através da <span className="text-blue-600">tecnologia inteligente</span>
                        </h3>

                        <p className="text-lg text-gray-600 mb-6">
                            Na GPY, não entregamos apenas software. Entregamos ferramentas de gestão e automação 
                            desenhadas para resolver os gargalos que impedem a sua empresa de crescer.
                        </p>

                        <p className="text-gray-600 mb-8">
                            Com mais de 3 anos de atuação e um portfólio de mais de 10 projetos bem-sucedidos, 
                            especializamo-nos em transformar caos operacional em processos digitais fluidos. 
                            O nosso compromisso é com o seu resultado final.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                "Redução de custos operacionais",
                                "Sistemas 100% personalizados",
                                "Suporte técnico especializado",
                                "Foco total na experiência do utilizador"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center space-x-3">
                                    <div className="flex-shrink-0 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                                        <CheckCircle className="h-4 w-4 text-blue-600" />
                                    </div>
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                        
                        <div className="mt-10">
                            <a 
                                href="#contato" 
                                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-lg"
                            >
                                Descubra como podemos ajudar
                            </a>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {values.map((value, index) => {
                            const IconComponent = value.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <SimpleCard
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