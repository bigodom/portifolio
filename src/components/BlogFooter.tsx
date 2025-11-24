const BlogFooter = () => {
    return (
        <section className="py-20 px-4 bg-white relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-50 to-transparent rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-50 to-transparent rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto max-w-4xl">
                {/* Card container with gradient border effect */}
                <div className="relative bg-gradient-to-br from-white to-slate-50 rounded-3xl p-12 md:p-16 border border-slate-200 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                    {/* Accent line top */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-t-3xl" />

                    <div className="text-center">
                        <div className="inline-block mb-6">
                            <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest bg-blue-50 px-4 py-2 rounded-full border border-blue-100">
                                💡 Transforme seu negócio
                            </span>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent leading-tight">
                            Precisa de uma Solução Tecnológica?
                        </h2>

                        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                            A GPY desenvolve <span className="font-semibold text-slate-800">sistemas customizados</span>, <span className="font-semibold text-slate-800">dashboards inteligentes</span>, <span className="font-semibold text-slate-800">soluções de IA</span> e <span className="font-semibold text-slate-800">análise de dados</span> para impulsionar o seu negócio.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <a href="https://gpysolucoes.com.br/#contato" className="group relative px-8 md:px-12 py-4 md:py-5 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                                <span className="flex items-center gap-2">
                                    Fale Conosco
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </span>
                            </a>
                            <a href="mailto:contact@gpy.com" className="text-slate-600 hover:text-blue-600 font-medium transition-colors flex items-center gap-2">
                                Ou envie um e-mail
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Accent line bottom */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-b-3xl" />
                </div>
            </div>
        </section>
    );
};

export default BlogFooter;