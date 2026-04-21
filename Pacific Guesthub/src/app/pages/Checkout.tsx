import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { Header } from '../components/Header';
import { Lock, CreditCard, Calendar, Users, BedDouble, CheckCircle } from 'lucide-react';
import type { Room } from '../utils/mockData';
import { format, differenceInDays } from 'date-fns';
import { es, enUS } from 'date-fns/locale';

export function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [language, setLanguage] = useState<'ES' | 'EN'>('ES');

  const room = location.state?.room as Room | undefined;

  // Mock booking data
  const [checkIn] = useState(new Date(2026, 3, 25));
  const [checkOut] = useState(new Date(2026, 3, 30));
  const [guests] = useState(2);

  if (!room) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header language={language} onLanguageToggle={() => setLanguage(prev => prev === 'ES' ? 'EN' : 'ES')} />
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <p className="text-xl text-gray-600">No hay habitación seleccionada</p>
          <button
            onClick={() => navigate('/rooms')}
            className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Ver habitaciones
          </button>
        </div>
      </div>
    );
  }

  const nights = differenceInDays(checkOut, checkIn);
  const subtotal = room.price * nights;
  const tax = subtotal * 0.19;
  const total = subtotal + tax;
  const deposit = total * 0.30;
  const remaining = total - deposit;

  const locale = language === 'ES' ? es : enUS;

  const content = {
    ES: {
      title: 'Resumen de Reserva',
      stayDetails: 'Detalles de Estancia',
      checkIn: 'Entrada',
      checkOut: 'Salida',
      guests: 'Huéspedes',
      nights: 'noches',
      selectedRoom: 'Habitación Seleccionada',
      paymentSummary: 'Resumen de Pago',
      subtotal: 'Subtotal estadía',
      tax: 'IVA (19%)',
      totalGeneral: 'Total General',
      depositRequired: 'Abono Requerido (30%)',
      remainingBalance: 'Saldo Restante',
      paymentMethod: 'Método de Pago',
      cardNumber: 'Número de Tarjeta',
      expiryDate: 'Fecha Vencimiento',
      cvv: 'CVV',
      cardholderName: 'Nombre del Titular',
      trustSignals: 'Reserva Garantizada',
      securePayment: 'Pago 100% Seguro',
      instantConfirmation: 'Confirmación Instantánea',
      confirmBooking: 'Confirmar Reserva',
      payNow: 'Pagar Ahora'
    },
    EN: {
      title: 'Booking Summary',
      stayDetails: 'Stay Details',
      checkIn: 'Check-In',
      checkOut: 'Check-Out',
      guests: 'Guests',
      nights: 'nights',
      selectedRoom: 'Selected Room',
      paymentSummary: 'Payment Summary',
      subtotal: 'Stay Subtotal',
      tax: 'VAT (19%)',
      totalGeneral: 'Total Amount',
      depositRequired: 'Required Deposit (30%)',
      remainingBalance: 'Remaining Balance',
      paymentMethod: 'Payment Method',
      cardNumber: 'Card Number',
      expiryDate: 'Expiry Date',
      cvv: 'CVV',
      cardholderName: 'Cardholder Name',
      trustSignals: 'Guaranteed Booking',
      securePayment: '100% Secure Payment',
      instantConfirmation: 'Instant Confirmation',
      confirmBooking: 'Confirm Booking',
      payNow: 'Pay Now'
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header language={language} onLanguageToggle={() => setLanguage(prev => prev === 'ES' ? 'EN' : 'ES')} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">{content[language].title}</h2>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Main Content - 60% */}
          <div className="lg:col-span-3 space-y-6">
            {/* Stay Details */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{content[language].stayDetails}</h3>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <p className="text-sm text-gray-500">{content[language].checkIn}</p>
                    <p className="font-semibold text-gray-900">{format(checkIn, 'dd MMM yyyy', { locale })}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <p className="text-sm text-gray-500">{content[language].checkOut}</p>
                    <p className="font-semibold text-gray-900">{format(checkOut, 'dd MMM yyyy', { locale })}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <p className="text-sm text-gray-500">{content[language].guests}</p>
                    <p className="font-semibold text-gray-900">{guests}</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-700 font-medium">{nights} {content[language].nights}</p>
              </div>
            </div>

            {/* Selected Room */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{content[language].selectedRoom}</h3>
              <div className="flex gap-4">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-32 h-32 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{room.name}</h4>
                  <p className="text-gray-600 mb-2">{room.description}</p>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                    room.category === 'premium' ? 'bg-amber-100 text-amber-700' : 'bg-blue-100 text-blue-700'
                  }`}>
                    {room.category === 'premium' ? 'Premium' : 'Turista'}
                  </span>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{content[language].paymentMethod}</h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {content[language].cardNumber}
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                    />
                    <CreditCard className="absolute right-3 top-3 w-6 h-6 text-gray-400" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {content[language].expiryDate}
                    </label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {content[language].cvv}
                    </label>
                    <input
                      type="text"
                      placeholder="123"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {content[language].cardholderName}
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Trust Signals */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border-2 border-green-200">
              <div className="flex items-center gap-3 mb-4">
                <Lock className="w-6 h-6 text-green-600" />
                <h3 className="text-xl font-bold text-gray-900">{content[language].trustSignals}</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-gray-700">{content[language].securePayment}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-gray-700">{content[language].instantConfirmation}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Summary Sidebar - 40% Sticky */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-2xl p-6 sticky top-24">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{content[language].paymentSummary}</h3>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-700">
                  <span>{content[language].subtotal}</span>
                  <span className="font-semibold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>{content[language].tax}</span>
                  <span className="font-semibold">${tax.toFixed(2)}</span>
                </div>
                <div className="border-t-2 border-gray-200 pt-4">
                  <div className="flex justify-between text-lg font-bold text-gray-900">
                    <span>{content[language].totalGeneral}</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-4 mb-6 border-2 border-amber-300">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-amber-900">{content[language].depositRequired}</span>
                  <span className="text-2xl font-bold text-amber-600">${deposit.toFixed(2)}</span>
                </div>
                <p className="text-sm text-amber-700">{content[language].payNow}</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span className="text-sm">{content[language].remainingBalance}</span>
                  <span className="text-sm font-semibold">${remaining.toFixed(2)}</span>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 rounded-lg transition-all shadow-lg hover:shadow-xl">
                {content[language].confirmBooking}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
