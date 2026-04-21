import { Wifi, Waves, Wind, Coffee, Tv, Lock } from 'lucide-react';
import * as Slider from '@radix-ui/react-slider';

interface RoomFiltersProps {
  language: 'ES' | 'EN';
  filters: {
    priceRange: number[];
    category: string;
    amenities: string[];
  };
  onFiltersChange: (filters: any) => void;
}

export function RoomFilters({ language, filters, onFiltersChange }: RoomFiltersProps) {
  const content = {
    ES: {
      filters: 'Filtros',
      price: 'Precio por noche',
      category: 'Categoría',
      all: 'Todas',
      tourist: 'Turista',
      premium: 'Premium',
      amenities: 'Amenidades',
      wifi: 'Wi-Fi',
      oceanView: 'Vista al Mar',
      ac: 'Aire Acondicionado',
      clearFilters: 'Limpiar Filtros'
    },
    EN: {
      filters: 'Filters',
      price: 'Price per night',
      category: 'Category',
      all: 'All',
      tourist: 'Tourist',
      premium: 'Premium',
      amenities: 'Amenities',
      wifi: 'Wi-Fi',
      oceanView: 'Ocean View',
      ac: 'Air Conditioning',
      clearFilters: 'Clear Filters'
    }
  };

  const amenitiesOptions = [
    { id: 'wifi', label: content[language].wifi, icon: Wifi },
    { id: 'ocean-view', label: content[language].oceanView, icon: Waves },
    { id: 'ac', label: content[language].ac, icon: Wind }
  ];

  const handlePriceChange = (value: number[]) => {
    onFiltersChange({ ...filters, priceRange: value });
  };

  const handleCategoryChange = (category: string) => {
    onFiltersChange({ ...filters, category });
  };

  const handleAmenityToggle = (amenityId: string) => {
    const newAmenities = filters.amenities.includes(amenityId)
      ? filters.amenities.filter(a => a !== amenityId)
      : [...filters.amenities, amenityId];
    onFiltersChange({ ...filters, amenities: newAmenities });
  };

  const clearFilters = () => {
    onFiltersChange({ priceRange: [0, 500], category: 'all', amenities: [] });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900">{content[language].filters}</h3>
        <button
          onClick={clearFilters}
          className="text-sm text-blue-600 hover:text-blue-700 font-medium"
        >
          {content[language].clearFilters}
        </button>
      </div>

      {/* Price Range */}
      <div className="mb-8">
        <label className="block text-sm font-semibold text-gray-700 mb-4">
          {content[language].price}
        </label>
        <Slider.Root
          className="relative flex items-center select-none touch-none w-full h-5"
          value={filters.priceRange}
          onValueChange={handlePriceChange}
          max={500}
          step={10}
          minStepsBetweenThumbs={1}
        >
          <Slider.Track className="bg-gray-200 relative grow rounded-full h-2">
            <Slider.Range className="absolute bg-blue-600 rounded-full h-full" />
          </Slider.Track>
          <Slider.Thumb
            className="block w-5 h-5 bg-white border-2 border-blue-600 rounded-full hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Minimum price"
          />
          <Slider.Thumb
            className="block w-5 h-5 bg-white border-2 border-blue-600 rounded-full hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Maximum price"
          />
        </Slider.Root>
        <div className="flex justify-between mt-3">
          <span className="text-sm font-medium text-gray-600">${filters.priceRange[0]}</span>
          <span className="text-sm font-medium text-gray-600">${filters.priceRange[1]}</span>
        </div>
      </div>

      {/* Category */}
      <div className="mb-8">
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          {content[language].category}
        </label>
        <div className="space-y-2">
          {['all', 'tourist', 'premium'].map(cat => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`w-full text-left px-4 py-3 rounded-lg border-2 transition-colors ${
                filters.category === cat
                  ? 'border-blue-600 bg-blue-50 text-blue-700 font-semibold'
                  : 'border-gray-200 hover:border-gray-300 text-gray-700'
              }`}
            >
              {content[language][cat as keyof typeof content.ES]}
            </button>
          ))}
        </div>
      </div>

      {/* Amenities */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          {content[language].amenities}
        </label>
        <div className="space-y-2">
          {amenitiesOptions.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => handleAmenityToggle(id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg border-2 transition-colors ${
                filters.amenities.includes(id)
                  ? 'border-blue-600 bg-blue-50 text-blue-700'
                  : 'border-gray-200 hover:border-gray-300 text-gray-700'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
