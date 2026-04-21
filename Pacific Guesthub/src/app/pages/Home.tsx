import { useState } from 'react';
import { CheckCircle, Shield, Clock } from 'lucide-react';
import { Header } from '../components/Header';
import { SearchBar } from '../components/SearchBar';
import { BenefitCard } from '../components/BenefitCard';

export function Home() {
  const [language, setLanguage] = useState<'ES' | 'EN'>('ES');

  const content = {
    ES: {
      title: 'Encuentra tu estadía perfecta',
      subtitle: 'Reserva con confianza en los mejores hoteles',
      benefits: [
        { icon: CheckCircle, title: 'Reserva inmediata', description: 'Confirmación al instante' },
        { icon: Shield, title: 'Seguridad en el pago', description: 'Transacciones protegidas' },
        { icon: Clock, title: 'Atención 24/7', description: 'Soporte cuando lo necesites' }
      ]
    },
    EN: {
      title: 'Find your perfect stay',
      subtitle: 'Book with confidence at the best hotels',
      benefits: [
        { icon: CheckCircle, title: 'Instant Booking', description: 'Immediate confirmation' },
        { icon: Shield, title: 'Secure Payment', description: 'Protected transactions' },
        { icon: Clock, title: '24/7 Support', description: 'Help when you need it' }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header language={language} onLanguageToggle={() => setLanguage(prev => prev === 'ES' ? 'EN' : 'ES')} />

      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4">
              {content[language].title}
            </h2>
            <p className="text-xl text-blue-100">
              {content[language].subtitle}
            </p>
          </div>

          <SearchBar language={language} />
        </div>

        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-auto">
            <path
              fill="#ffffff"
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            />
          </svg>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content[language].benefits.map((benefit, index) => (
              <BenefitCard
                key={index}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
