export default function SolutionSection() {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Tablets para Meseros',
      description: 'Tomar pedidos en la mesa en segundos. El mesero nunca deja al cliente, y la orden vuela a cocina.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Pantallas/Impresoras de Cocina',
      description: 'La orden llega instantaneamente a los chefs. Sin papeles perdidos, sin confusiones, sin demoras.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      title: 'Pantalla de Estado para Clientes',
      description: 'Los clientes ven el estado de su pedido. Reduccion de filas en mostrador y mejor experiencia.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: 'Facturacion Electronica SRI',
      description: 'Nativa, rapida y sin lios contables. Cumple con todas las normativas ecuatorianas automaticamente.',
    },
  ];

  return (
    <section id="como-funciona" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-600 rounded-full text-sm font-medium mb-4">
            La Solucion
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 text-balance">
            Todo lo que necesitas para un servicio impecable
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Un sistema completo que conecta meseros, cocina y caja en tiempo real.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex gap-6 p-6 lg:p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center text-white">
                  {feature.icon}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-navy-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Visual flow diagram */}
        <div className="mt-16 lg:mt-24">
          <div className="bg-white rounded-3xl p-8 lg:p-12 border border-gray-100 shadow-lg">
            <h3 className="text-2xl font-bold text-navy-900 text-center mb-12">
              Asi fluye tu restaurante con GestoH
            </h3>
            
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center flex-1">
                <div className="w-20 h-20 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600 mb-4">
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-navy-900">Cliente Ordena</h4>
                <p className="text-sm text-gray-500 mt-1">Mesero toma el pedido en tablet</p>
              </div>

              {/* Arrow */}
              <div className="hidden lg:block text-gray-300">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center text-center flex-1">
                <div className="w-20 h-20 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-600 mb-4">
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h4 className="font-semibold text-navy-900">Cocina Prepara</h4>
                <p className="text-sm text-gray-500 mt-1">La orden aparece en pantalla</p>
              </div>

              {/* Arrow */}
              <div className="hidden lg:block text-gray-300">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center text-center flex-1">
                <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 mb-4">
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-navy-900">Listo para Servir</h4>
                <p className="text-sm text-gray-500 mt-1">Cliente notificado y satisfecho</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
