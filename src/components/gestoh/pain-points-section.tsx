export default function PainPointsSection() {
  const painPoints = [
    {
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Pedidos Lentos',
      description: 'Clientes esperando demasiado tiempo mientras el mesero anota en papel y camina a cocina.',
      color: 'text-red-500',
      bgColor: 'bg-red-50',
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: 'Errores en Comandas',
      description: 'Pedidos mal anotados, platos equivocados y clientes insatisfechos que no vuelven.',
      color: 'text-amber-500',
      bgColor: 'bg-amber-50',
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Falta de Control y Reportes',
      description: 'Sin saber que se vende, cuando y como. Decisiones a ciegas que afectan tu negocio.',
      color: 'text-navy-700',
      bgColor: 'bg-slate-100',
    },
  ];

  return (
    <section id="beneficios" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-red-50 text-red-600 rounded-full text-sm font-medium mb-4">
            El Problema
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 text-balance">
            El caos diario que esta costando dinero a tu restaurante
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Estos problemas son mas comunes de lo que crees, y tienen solucion.
          </p>
        </div>

        {/* Pain points grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-16 h-16 ${point.bgColor} rounded-2xl flex items-center justify-center ${point.color} mb-6`}>
                {point.icon}
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">{point.title}</h3>
              <p className="text-gray-600 leading-relaxed">{point.description}</p>
              
              {/* Hover accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-primary-600 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
