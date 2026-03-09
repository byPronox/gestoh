'use client';

export default function PricingSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    'Tablets para meseros ilimitadas',
    'Pantallas de cocina',
    'Facturacion electronica SRI',
    'Reportes en tiempo real',
    'Soporte tecnico local',
    'Actualizaciones incluidas',
  ];

  return (
    <section id="precios" className="py-20 lg:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-600 rounded-full text-sm font-medium mb-4">
            Precios Transparentes
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 text-balance">
            Tecnologia Premium a Precio PYME
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Sin sorpresas, sin contratos largos. Paga lo justo por lo que necesitas.
          </p>
        </div>

        {/* Pricing card */}
        <div className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 rounded-3xl p-8 lg:p-12 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-500/5 rounded-full blur-2xl" />
          
          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
              {/* Price */}
              <div>
                <p className="text-primary-400 font-medium mb-2">Por local</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-sm text-gray-400">Desde</span>
                  <span className="text-6xl lg:text-7xl font-bold text-white">$12</span>
                  <span className="text-xl text-gray-400">/mes</span>
                </div>
                <p className="mt-4 text-gray-300">
                  + Costo de Implementacion unica <br />
                  <span className="text-gray-500 text-sm">(Paga solo una vez por configurar todo)</span>
                </p>
              </div>

              {/* CTA */}
              <button
                onClick={scrollToContact}
                className="gestoh-gradient-btn px-8 py-4 rounded-full text-lg font-semibold w-full lg:w-auto"
              >
                Solicitar Cotizacion
              </button>
            </div>

            {/* Features */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-white font-semibold mb-6">Todo incluido:</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Trust note */}
        <p className="mt-8 text-center text-gray-500 text-sm">
          Sin contratos de permanencia. Cancela cuando quieras. Sin letra pequena.
        </p>
      </div>
    </section>
  );
}
