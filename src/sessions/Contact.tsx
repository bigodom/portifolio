import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {

  return (
    <section id="contato" className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-contact-title">
            Entre em Contato
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="text-contact-subtitle">
            Pronto para transformar sua ideia em realidade? Vamos conversar sobre seu projeto
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          

          {/* Contact Info */}
          <div className="space-y-8">
                <h3 className="text-xl font-semibold mb-6" data-testid="text-contact-info-title">
                  Informações de Contato
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium" data-testid="text-email-label">E-mail</h4>
                      <p className="text-muted-foreground" data-testid="text-email">
                        maltech@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium" data-testid="text-phone-label">Telefone</h4>
                      <p className="text-muted-foreground" data-testid="text-phone">
                        (31) 99221-8398
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium" data-testid="text-address-label">Localização</h4>
                      <p className="text-muted-foreground" data-testid="text-address">
                        João Monlevade, MG<br />
                        Brasil
                      </p>
                    </div>
                  </div>
                </div>
          </div>
        </div>
      </div>
    </section>
  );
}