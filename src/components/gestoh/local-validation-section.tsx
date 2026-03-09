export default function LocalValidationSection() {
  return (
    <section className="py-16 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
              Disenado para el mercado de Quito
            </h3>
            <p className="text-gray-300 text-lg">
              Cumplimiento 100% con normativas del <span className="text-primary-400 font-semibold">SRI</span>. 
              Soporte local en espanol.
            </p>
          </div>

          {/* Ecuador badge */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4">
              <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center bg-white">
                {/* Ecuador colors */}
                <div className="w-full h-full flex flex-col">
                  <div className="flex-1 bg-yellow-400" />
                  <div className="flex-1 bg-blue-600" />
                  <div className="flex-1 bg-red-600" />
                </div>
              </div>
              <div>
                <p className="text-white font-semibold">Ecuador</p>
                <p className="text-gray-400 text-sm">100% Compatible</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4">
              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <p className="text-white font-semibold">SRI</p>
                <p className="text-gray-400 text-sm">Autorizado</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
