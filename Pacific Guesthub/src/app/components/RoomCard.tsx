import { Wifi, Waves, Wind, Coffee, Tv, Lock, Palmtree } from 'lucide-react';
import { useNavigate } from 'react-router';
import type { Room } from '../utils/mockData';

interface RoomCardProps {
  room: Room;
  language: 'ES' | 'EN';
}

const amenityIcons: Record<string, any> = {
  'wifi': Wifi,
  'ocean-view': Waves,
  'ac': Wind,
  'minibar': Coffee,
  'tv': Tv,
  'safe': Lock,
  'balcony': Palmtree,
  'jacuzzi': Waves
};

export function RoomCard({ room, language }: RoomCardProps) {
  const navigate = useNavigate();

  const content = {
    ES: {
      perNight: 'por noche',
      select: 'Seleccionar',
      tourist: 'Turista',
      premium: 'Premium'
    },
    EN: {
      perNight: 'per night',
      select: 'Select',
      tourist: 'Tourist',
      premium: 'Premium'
    }
  };

  const handleSelect = () => {
    navigate('/checkout', { state: { room } });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={room.image}
          alt={room.name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
            room.category === 'premium'
              ? 'bg-amber-500 text-white'
              : 'bg-blue-500 text-white'
          }`}>
            {content[language][room.category]}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{room.name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{room.description}</p>

        {/* Amenities */}
        <div className="flex flex-wrap gap-3 mb-4">
          {room.amenities.slice(0, 6).map((amenity) => {
            const Icon = amenityIcons[amenity] || Wifi;
            return (
              <div
                key={amenity}
                className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-lg hover:bg-blue-50 transition-colors"
                title={amenity}
              >
                <Icon className="w-5 h-5 text-gray-600" />
              </div>
            );
          })}
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <div>
            <span className="text-3xl font-bold text-blue-600">${room.price}</span>
            <span className="text-gray-500 text-sm ml-2">/ {content[language].perNight}</span>
          </div>
          <button
            onClick={handleSelect}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors shadow-md hover:shadow-lg"
          >
            {content[language].select}
          </button>
        </div>
      </div>
    </div>
  );
}
