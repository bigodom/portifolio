import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const whatsappNumber = "5531992218398";
  const whatsappMessage = "Olá! Vim pelo site e gostaria de saber mais.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  const mailToUrl = "mailto:gpysolucoes@gmail.com";

  const [state, handleSubmit] = useForm("xnnljgvn");

  return (
    <section id="contato" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Entre em Contato
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Pronto para transformar sua ideia em realidade? Vamos conversar sobre seu projeto!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulário */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            {state.succeeded ? (
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">Mensagem enviada</h3>
                <p className="text-gray-600">Obrigado! Recebemos sua mensagem e entraremos em contato em breve.</p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-semibold mb-6">Envie uma Mensagem</h3>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label className="sr-only" htmlFor="name">Seu nome</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Seu nome"
                      required
                      className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <ValidationError prefix="Nome" field="name" errors={state.errors} />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="email">Seu e-mail</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Seu e-mail"
                      required
                      className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <ValidationError prefix="E-mail" field="email" errors={state.errors} />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="message">Sua mensagem</label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Sua mensagem"
                      rows={4}
                      required
                      className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <ValidationError prefix="Mensagem" field="message" errors={state.errors} />
                  </div>

                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-primary/90 transition-all duration-200 disabled:opacity-60"
                  >
                    {state.submitting ? 'Enviando...' : 'Enviar'}
                  </button>

                  {/* Field-level validation messages are rendered via <ValidationError /> above. */}
                </form>
              </>
            )}
          </div>

          {/* Informações de Contato */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 space-y-8">
            <h3 className="text-xl font-semibold mb-6">Informações de Contato</h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">E-mail</h4>
                  <p className="text-gray-600">gpysolucoes@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-green-100 rounded-lg">
                  <Phone className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-medium">Telefone</h4>
                  <p className="text-gray-600">(31) 99221-8398</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <MapPin className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium">Localização</h4>
                  <p className="text-gray-600">
                    João Monlevade, MG<br />Brasil
                  </p>
                </div>
              </div>
            </div>

            {/* Botões de ação */}
            <div className="pt-6 flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 shadow-md"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>

              <a
                href={mailToUrl}
                className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 shadow-md"
              >
                <Mail className="w-5 h-5" />
                Enviar E-mail
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
