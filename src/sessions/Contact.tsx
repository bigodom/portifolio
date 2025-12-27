import { Mail, Phone, MapPin, MessageCircle, ClipboardCheck } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const whatsappNumber = "5531992218398";
  // Mensagem de WhatsApp ajustada para a nova proposta
  const whatsappMessage = "Olá! Gostaria de agendar um diagnóstico gratuito para a minha empresa.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  const mailToUrl = "mailto:gpysolucoes@gmail.com";

  const [state, handleSubmit] = useForm("xnnljgvn");

  return (
    <section id="contato" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Agende o seu Diagnóstico Gratuito
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Vamos analisar os seus processos atuais e identificar como a tecnologia pode 
            reduzir os seus custos e acelerar o seu crescimento.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulário de Diagnóstico */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            {state.succeeded ? (
              <div className="text-center py-8">
                <div className="flex justify-center mb-4">
                    <ClipboardCheck className="h-12 w-12 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Solicitação Recebida!</h3>
                <p className="text-gray-600">
                    Obrigado pelo interesse. Analisaremos as suas informações e entraremos em 
                    contacto em breve para agendar a nossa conversa.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-semibold mb-2">Solicite uma análise da sua operação</h3>
                <p className="text-sm text-gray-500 mb-6">Preencha os dados abaixo e entraremos em contacto.</p>
                
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">Nome completo</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Como gostaria de ser chamado?"
                      required
                      className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <ValidationError prefix="Nome" field="name" errors={state.errors} />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">E-mail corporativo</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="exemplo@suaempresa.com"
                      required
                      className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <ValidationError prefix="E-mail" field="email" errors={state.errors} />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="message">Qual o maior desafio da sua empresa hoje?</label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Ex: Preciso automatizar o meu stock, quero um dashboard de vendas, etc."
                      rows={4}
                      required
                      className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <ValidationError prefix="Mensagem" field="message" errors={state.errors} />
                  </div>

                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-60"
                  >
                    {state.submitting ? 'A processar...' : 'QUERO MEU DIAGNÓSTICO GRATUITO'}
                  </button>
                </form>
              </>
            )}
          </div>

          {/* Informações de Contacto */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 space-y-8">
            <div>
                <h3 className="text-xl font-semibold mb-2">Informações de Contacto</h3>
                <p className="text-gray-500 text-sm">Prefere um contacto direto? Escolha um dos canais abaixo:</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <Mail className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">E-mail</h4>
                  <p className="text-gray-600">gpysolucoes@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-green-50 rounded-lg">
                  <Phone className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Telefone / WhatsApp</h4>
                  <p className="text-gray-600">(31) 99221-8398</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <MapPin className="h-5 w-5 text-gray-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Localização</h4>
                  <p className="text-gray-600">
                    João Monlevade, MG<br />Atendimento em todo o Brasil
                  </p>
                </div>
              </div>
            </div>

            {/* Botões de ação rápida */}
            <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-lg font-bold transition-all duration-200 shadow-md flex-1"
              >
                <MessageCircle className="w-5 h-5" />
                FALAR NO WHATSAPP
              </a>

              <a
                href={mailToUrl}
                className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-black text-white px-6 py-4 rounded-lg font-bold transition-all duration-200 shadow-md flex-1"
              >
                <Mail className="w-5 h-5" />
                ENVIAR E-MAIL
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
