import type { Locale } from '@/lib/i18n';

export const copy: Record<
  Locale,
  {
    hero: {
      subheading: string;
      h1: string;
      paragraph: string;
      cta: string;
      ctaSecondary: string;
    };
    heroLogos: { trustedBy: string };
    coreFeatures: {
      title: string;
      subtitle: string;
      features: { title: string; description: string }[];
    };
    toolsTab: {
      title: string;
      subtitle: string;
      tabs: { id: string; label: string; title: string; description: string }[];
      cta: string;
    };
    benefits: {
      title: string;
      subtitle: string;
      card1Title: string;
      card1Text: string;
      card2Title: string;
      card2Text: string;
      card2Cta: string;
    };
    testimonials: {
      title: string;
      subtitle: string;
      showMore: string;
      showLess: string;
      items: { name: string; company: string; testimonial: string }[];
    };
    pricing: {
      title: string;
      subtitle: string;
      plans: {
        name: string;
        price: string;
        paymentType: string;
        description: string;
        features: string[];
        cta: string;
        popular: boolean;
      }[];
    };
    faq: {
      title: string;
      subtitle: string;
      items: { question: string; answer: string }[];
    };
    ctaClosing: string;
    footer: { tagline: string };
  }
> = {
  en: {
    hero: {
      subheading: 'Total automation for local businesses',
      h1: 'From chaos to control. Your business, one ecosystem.',
      paragraph:
        'We turn paper-dependent, manual operations into agile, data-driven businesses. Get your time back and run your store, restaurant, or clinic from anywhere.',
      cta: 'Schedule a demo',
      ctaSecondary: 'Watch intro',
    },
    heroLogos: {
      trustedBy: 'Trusted by local businesses and SMBs',
    },
    coreFeatures: {
      title: 'What we deliver',
      subtitle:
        'One connected ecosystem: operations, admin, and digital presence in sync.',
      features: [
        {
          title: 'Frictionless operations',
          description:
            'Mobile POS and kitchen displays in sync. No paper, no shouting, no lost orders. Orders flow in real time from front to back.',
        },
        {
          title: 'Admin on autopilot',
          description:
            'E-invoicing tied to tax authorities, one-click cash closing, and live inventory. Less paperwork, fewer errors.',
        },
        {
          title: 'Physical meets digital',
          description:
            'Online store, catalog, or bookings feed the same central system. One source of truth, no double data entry.',
        },
        {
          title: 'Control from anywhere',
          description:
            'Manager dashboards on your phone. See what sells, when, and who sold it—anywhere in the world.',
        },
        {
          title: 'Built for owners and staff',
          description:
            'Technology that’s easy for you and your team. No IT degree required—focus on your business, not the tool.',
        },
        {
          title: 'Your strategic partner',
          description:
            'We’re not just software. We help you design and run an operation that scales with confidence.',
        },
      ],
    },
    toolsTab: {
      title: 'One ecosystem, every part of your business',
      subtitle:
        'Point of sale, inventory, invoicing, and digital presence—connected and automated.',
      tabs: [
        {
          id: 'pos',
          label: 'Point of sale',
          title: 'Sell faster, with zero friction',
          description:
            'Mobile POS and kitchen or warehouse displays in sync. Orders and updates in real time.',
        },
        {
          id: 'inventory',
          label: 'Inventory',
          title: 'Stock that updates itself',
          description:
            'Sales and restocks update inventory automatically. Know what you have without spreadsheets.',
        },
        {
          id: 'invoicing',
          label: 'Invoicing',
          title: 'Compliant e-invoicing, automatic',
          description:
            'E-invoicing linked to authorities. One-click cash closing and clear records.',
        },
        {
          id: 'digital',
          label: 'Digital presence',
          title: 'Online and in-store, one system',
          description:
            'Online store, catalog, or reservations feeding the same central system.',
        },
        {
          id: 'control',
          label: 'Control & data',
          title: 'Your business at a glance',
          description:
            'Dashboards on your phone. Sales, performance, and team—wherever you are.',
        },
      ],
      cta: 'Schedule a demo',
    },
    benefits: {
      title: 'Before vs after',
      subtitle:
        'We take you from manual chaos to an operation you can run and trust.',
      card1Title: 'From notebooks and calculators to one system',
      card1Text:
        'Stop juggling paper, spreadsheets, and guesswork. One ecosystem for orders, inventory, and payments.',
      card2Title: '10x more control, from your phone',
      card2Text:
        'Manager dashboards and live data. Know what’s selling, who’s selling it, and how the day is going—from anywhere.',
      card2Cta: 'See how it works',
    },
    testimonials: {
      title: 'What business owners say',
      subtitle:
        'Local businesses and SMBs who moved from manual ops to a single, automated ecosystem.',
      showMore: 'Show more',
      showLess: 'Show less',
      items: [
        {
          name: 'María G.',
          company: 'Restaurant El Buen Sabor',
          testimonial:
            'We went from notebooks and shouting orders to tablets and screens in the kitchen. Fewer mistakes, happier staff, and I can close the till in one click.',
        },
        {
          name: 'Carlos R.',
          company: 'Ferretería Central',
          testimonial:
            'Inventory used to be a nightmare. Now it updates with every sale. We have control and our clients find what they need.',
        },
        {
          name: 'Ana L.',
          company: 'Clínica Dental Sonrisa',
          testimonial:
            'Appointments and billing in one place. Less admin, more time for patients. Exactly what we needed.',
        },
        {
          name: 'Roberto M.',
          company: 'Tienda de conveniencia',
          testimonial:
            'I check sales and stock from my phone. No more surprises at month end. The peace of mind is worth it.',
        },
        {
          name: 'Laura S.',
          company: 'Panadería La Esquina',
          testimonial:
            'E-invoicing and cash closing in one click. We look more professional and spend less time on paperwork.',
        },
        {
          name: 'Pablo T.',
          company: 'Farmacia del Pueblo',
          testimonial:
            'One system for the counter and for what we sell online. No double work. Our team learned it in days.',
        },
      ],
    },
    pricing: {
      title: 'Plans that grow with your business',
      subtitle:
        'From a single location to multiple sites. Transparent pricing, no hidden fees.',
      plans: [
        {
          name: 'Standard landing page',
          price: '$100',
          paymentType: 'One-time payment',
          description:
            'A professional custom landing page. Includes hosting advice and 6 months of free hosting.',
          features: [
            'Hosting consultation & purchase',
            'Free hosting for 6 months',
            'Professional custom landing page',
          ],
          cta: 'Buy now',
          popular: false,
        },
        {
          name: 'Plus plan',
          price: '$200',
          paymentType: 'One-time payment',
          description:
            'Everything in Standard, plus a complete website with CMS for self-managed updates.',
          features: [
            'Everything in Standard',
            'Complete website with CMS',
            'Self-managed content updates',
          ],
          cta: 'Buy now',
          popular: true,
        },
        {
          name: 'Pro plan',
          price: '$300',
          paymentType: 'One-time payment',
          description:
            'Complete implementation of the automated Odoo system for your business.',
          features: [
            'Complete Odoo system implementation',
            'Full business automation',
            'One-time payment',
          ],
          cta: 'Buy now',
          popular: false,
        },
        {
          name: 'Enterprise complete',
          price: "Let's talk",
          paymentType: '',
          description:
            'Custom website along with the complete Odoo system for your local business.',
          features: [
            'Custom tailored website',
            'Complete Odoo system',
            'Tailored enterprise implementation',
          ],
          cta: 'Contact us',
          popular: false,
        },
      ],
    },
    faq: {
      title: 'Frequently asked questions',
      subtitle: 'Common questions about our ecosystem and implementation.',
      items: [
        {
          question: 'Do I need technical knowledge?',
          answer:
            'No. We design the system so you and your staff can use it from day one. We handle setup, training, and support so you focus on your business.',
        },
        {
          question: 'How long does implementation take?',
          answer:
            'It depends on the size and complexity of your operation. A typical single-location business can be up and running in a few weeks, with training and go-live included.',
        },
        {
          question: 'Can I keep my current hardware?',
          answer:
            'In many cases, yes. We work with common devices (tablets, screens, printers) and will tell you during the demo what’s compatible with your setup.',
        },
        {
          question: 'Is e-invoicing included?',
          answer:
            'Yes. Our system connects with the relevant tax authorities so you can issue compliant e-invoices and keep your books in order without extra tools.',
        },
        {
          question: 'What support do you offer?',
          answer:
            'We offer onboarding, training, and ongoing support so you and your team can run the system with confidence. Response times depend on your plan.',
        },
      ],
    },
    ctaClosing: 'Take the leap to real digital transformation',
    footer: {
      tagline:
        'We turn local businesses and SMBs into agile, data-driven operations. One ecosystem for POS, inventory, invoicing, and digital presence.',
    },
  },
  es: {
    hero: {
      subheading: 'Automatización total para negocios locales',
      h1: 'Del caos al control. Tu negocio, un solo ecosistema.',
      paragraph:
        'Convertimos operaciones manuales y dependientes del papel en negocios ágiles y basados en datos. Recupera tu tiempo y dirige tu tienda, restaurante o clínica desde cualquier lugar.',
      cta: 'Agendar demostración',
      ctaSecondary: 'Ver intro',
    },
    heroLogos: {
      trustedBy: 'Con la confianza de negocios locales y PYMES',
    },
    coreFeatures: {
      title: 'Qué entregamos',
      subtitle:
        'Un solo ecosistema conectado: operación, administración y presencia digital en sincronía.',
      features: [
        {
          title: 'Operación sin fricción',
          description:
            'Punto de venta móvil y pantallas en cocina o bodega sincronizados. Cero papeles, cero gritos, cero pedidos perdidos. Todo en tiempo real.',
        },
        {
          title: 'Administración en piloto automático',
          description:
            'Facturación electrónica ligada a las entidades tributarias, cierre de caja en un clic e inventario en vivo. Menos papeleo, menos errores.',
        },
        {
          title: 'Lo físico y lo digital unidos',
          description:
            'Tienda en línea, catálogo o reservas alimentan el mismo sistema central. Una sola fuente de verdad, sin duplicar datos.',
        },
        {
          title: 'Control desde cualquier lugar',
          description:
            'Dashboards gerenciales en tu celular. Saber qué se vende, cuándo y quién lo vende, desde cualquier parte del mundo.',
        },
        {
          title: 'Hecho para dueños y empleados',
          description:
            'Tecnología fácil para ti y tu equipo. No hace falta ser técnico: enfócate en tu negocio, no en la herramienta.',
        },
        {
          title: 'Tu aliado estratégico',
          description:
            'No somos solo software. Te ayudamos a diseñar y operar un negocio que escala con confianza.',
        },
      ],
    },
    toolsTab: {
      title: 'Un ecosistema para todo tu negocio',
      subtitle:
        'Punto de venta, inventario, facturación y presencia digital: conectados y automatizados.',
      tabs: [
        {
          id: 'pos',
          label: 'Punto de venta',
          title: 'Vende más rápido, sin fricción',
          description:
            'PDV móvil y pantallas en cocina o bodega sincronizados. Pedidos y actualizaciones en tiempo real.',
        },
        {
          id: 'inventory',
          label: 'Inventario',
          title: 'Stock que se actualiza solo',
          description:
            'Cada venta y cada entrada actualizan el inventario. Sabes qué tienes sin hojas de cálculo.',
        },
        {
          id: 'invoicing',
          label: 'Facturación',
          title: 'Facturación electrónica automática y legal',
          description:
            'Facturación electrónica conectada con las autoridades. Cierre de caja en un clic y registros claros.',
        },
        {
          id: 'digital',
          label: 'Presencia digital',
          title: 'Online y en tienda, un solo sistema',
          description:
            'Tienda en línea, catálogo o reservas que alimentan el mismo sistema central.',
        },
        {
          id: 'control',
          label: 'Control y datos',
          title: 'Tu negocio en un vistazo',
          description:
            'Dashboards en tu celular. Ventas, rendimiento y equipo, estés donde estés.',
        },
      ],
      cta: 'Agendar demostración',
    },
    benefits: {
      title: 'Antes y después',
      subtitle:
        'Pasamos del caos manual a una operación que puedes dirigir y en la que puedes confiar.',
      card1Title: 'De libretas y calculadoras a un solo sistema',
      card1Text:
        'Deja de mezclar papel, hojas de cálculo y suposiciones. Un ecosistema para pedidos, inventario y pagos.',
      card2Title: '10 veces más control, desde tu celular',
      card2Text:
        'Dashboards gerenciales y datos en vivo. Saber qué se vende, quién vende y cómo va el día, desde cualquier lugar.',
      card2Cta: 'Ver cómo funciona',
    },
    testimonials: {
      title: 'Lo que dicen los dueños de negocio',
      subtitle:
        'Negocios locales y PYMES que pasaron de la operación manual a un solo ecosistema automatizado.',
      showMore: 'Ver más',
      showLess: 'Ver menos',
      items: [
        {
          name: 'María G.',
          company: 'Restaurante El Buen Sabor',
          testimonial:
            'Pasamos de libretas y gritos a tablets y pantallas en cocina. Menos errores, equipo más contento y cierro caja en un clic.',
        },
        {
          name: 'Carlos R.',
          company: 'Ferretería Central',
          testimonial:
            'El inventario era una pesadilla. Ahora se actualiza con cada venta. Tenemos control y el cliente encuentra lo que necesita.',
        },
        {
          name: 'Ana L.',
          company: 'Clínica Dental Sonrisa',
          testimonial:
            'Citas y facturación en un solo lugar. Menos administración, más tiempo para los pacientes. Justo lo que necesitábamos.',
        },
        {
          name: 'Roberto M.',
          company: 'Tienda de conveniencia',
          testimonial:
            'Reviso ventas e inventario desde el celular. No más sorpresas a fin de mes. La tranquilidad lo vale.',
        },
        {
          name: 'Laura S.',
          company: 'Panadería La Esquina',
          testimonial:
            'Facturación electrónica y cierre de caja en un clic. Nos vemos más profesionales y perdemos menos tiempo en papeles.',
        },
        {
          name: 'Pablo T.',
          company: 'Farmacia del Pueblo',
          testimonial:
            'Un sistema para mostrador y para lo que vendemos en línea. Sin trabajo doble. El equipo lo aprendió en días.',
        },
      ],
    },
    pricing: {
      title: 'Planes que crecen con tu negocio',
      subtitle:
        'Desde un solo local hasta múltiples puntos. Precios claros, sin sorpresas.',
      plans: [
        {
          name: 'Standard landing page',
          price: '$100',
          paymentType: 'Pago único',
          description:
            'Una landing page profesional a la medida. Incluye asesoría en hosting y 6 meses de hosting gratis.',
          features: [
            'Asesoría y compra de hosting',
            'Host gratis por 6 meses',
            'Landing page profesional a la medida',
          ],
          cta: 'Comprar ahora',
          popular: false,
        },
        {
          name: 'Plus plan',
          price: '$200',
          paymentType: 'Pago único',
          description:
            'Todo lo del plan Standard, además de una página completa con CMS para cambios constantes sin depender de nosotros.',
          features: [
            'Todo lo de Standard landing page',
            'Página completa con CMS',
            'Autogestión de cambios',
          ],
          cta: 'Comprar ahora',
          popular: true,
        },
        {
          name: 'Pro plan',
          price: '$300',
          paymentType: 'Pago único',
          description:
            'Implementación completa del sistema Odoo en su negocio automatizado todo con un pago único.',
          features: [
            'Implementación completa de Odoo',
            'Negocio totalmente automatizado',
            'Pago único',
          ],
          cta: 'Comprar ahora',
          popular: false,
        },
        {
          name: 'Enterprise complete',
          price: 'Hablemos',
          paymentType: '',
          description:
            'Página web a la medida junto con el sistema Odoo al completo para su local.',
          features: [
            'Página web a la medida',
            'Sistema Odoo completo',
            'Implementación personalizada',
          ],
          cta: 'Contactar ventas',
          popular: false,
        },
      ],
    },
    faq: {
      title: 'Preguntas frecuentes',
      subtitle:
        'Dudas habituales sobre nuestro ecosistema y la implementación.',
      items: [
        {
          question: '¿Necesito conocimientos técnicos?',
          answer:
            'No. Diseñamos el sistema para que tú y tu equipo puedan usarlo desde el primer día. Nos encargamos de la implementación, capacitación y soporte para que te enfoques en tu negocio.',
        },
        {
          question: '¿Cuánto tarda la implementación?',
          answer:
            'Depende del tamaño y la complejidad de tu operación. Un negocio típico de un solo local puede estar en marcha en pocas semanas, con capacitación y puesta en marcha incluidos.',
        },
        {
          question: '¿Puedo usar mi equipo actual?',
          answer:
            'En muchos casos sí. Trabajamos con dispositivos habituales (tablets, pantallas, impresoras) y en la demo te decimos qué es compatible con tu operación.',
        },
        {
          question: '¿La facturación electrónica está incluida?',
          answer:
            'Sí. Nuestro sistema se conecta con las entidades tributarias correspondientes para que emitas facturas electrónicas válidas y mantengas tu contabilidad en orden sin herramientas extra.',
        },
        {
          question: '¿Qué soporte ofrecen?',
          answer:
            'Ofrecemos onboarding, capacitación y soporte continuo para que tú y tu equipo operen el sistema con confianza. Los tiempos de respuesta dependen de tu plan.',
        },
      ],
    },
    ctaClosing: 'Da el salto a la verdadera transformación digital',
    footer: {
      tagline:
        'Convertimos negocios locales y PYMES en operaciones ágiles y basadas en datos. Un ecosistema para punto de venta, inventario, facturación y presencia digital.',
    },
  },
};
