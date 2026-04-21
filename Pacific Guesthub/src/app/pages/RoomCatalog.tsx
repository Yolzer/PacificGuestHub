import { useState } from 'react';
import { Header } from '../components/Header';
import { RoomCard } from '../components/RoomCard';
import { RoomFilters } from '../components/RoomFilters';
import { generateRooms } from '../utils/mockData';

export function RoomCatalog() {
  const [language, setLanguage] = useState<'ES' | 'EN'>('ES');
  const [filters, setFilters] = useState({
    priceRange: [0, 500],
    category: 'all',
    amenities: [] as string[]
  });

  const allRooms = generateRooms();

  const filteredRooms = allRooms.filter(room => {
    const matchesPrice = room.price >= filters.priceRange[0] && room.price <= filters.priceRange[1];
    const matchesCategory = filters.category === 'all' || room.category === filters.category;
    const matchesAmenities = filters.amenities.length === 0 ||
      filters.amenities.every(amenity => room.amenities.includes(amenity));

    return matchesPrice && matchesCategory && matchesAmenities;
  });

  const content = {
    ES: {
      title: 'Catálogo de Habitaciones',
      subtitle: `${filteredRooms.length} habitaciones disponibles`,
      noResults: 'No se encontraron habitaciones con los filtros seleccionados'
    },
    EN: {
      title: 'Room Catalog',
      subtitle: `${filteredRooms.length} rooms available`,
      noResults: 'No rooms found with the selected filters'
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header language={language} onLanguageToggle={() => setLanguage(prev => prev === 'ES' ? 'EN' : 'ES')} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">{content[language].title}</h2>
          <p className="text-lg text-gray-600">{content[language].subtitle}</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:w-80 flex-shrink-0">
            <RoomFilters language={language} filters={filters} onFiltersChange={setFilters} />
          </aside>

          {/* Room Grid */}
          <main className="flex-1">
            {filteredRooms.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredRooms.map(room => (
                  <RoomCard key={room.id} room={room} language={language} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-xl text-gray-500">{content[language].noResults}</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
