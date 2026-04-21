export interface Room {
  id: number;
  name: string;
  category: 'tourist' | 'premium';
  price: number;
  amenities: string[];
  image: string;
  description: string;
}

const roomNames = {
  tourist: [
    'Vista Jardín', 'Brisa Marina', 'Amanecer', 'Palmeras', 'Coral',
    'Arena Dorada', 'Océano Azul', 'Sol Radiante', 'Luna Llena', 'Estrella del Mar',
    'Confort Clásico', 'Descanso Tropical', 'Refugio Tranquilo', 'Oasis Urbano', 'Sueño Pacífico',
    'Horizonte', 'Cascada', 'Bambú', 'Orquídea', 'Paraíso Simple'
  ],
  premium: [
    'Suite Presidencial', 'Royal Ocean', 'Diamond Sky', 'Penthouse Vista', 'Executive Paradise',
    'Grand Pacific', 'Luxury Marina', 'Imperial Suite', 'Crown Jewel', 'Platinum View',
    'Elite Horizon', 'Premium Sunset', 'Golden Shores', 'Crystal Bay', 'Sapphire Ocean',
    'Premium Vista', 'Deluxe Paradise', 'Executive Ocean'
  ]
};

const amenitiesList = {
  wifi: 'wifi',
  oceanView: 'ocean-view',
  ac: 'ac',
  minibar: 'minibar',
  balcony: 'balcony',
  jacuzzi: 'jacuzzi',
  tv: 'tv',
  safe: 'safe'
};

const hotelImages = [
  'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  'https://images.unsplash.com/photo-1618773928121-c32242e63f39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  'https://images.unsplash.com/photo-1611892440504-42a792e24d32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  'https://images.unsplash.com/photo-1607712617949-8c993d290809?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  'https://images.unsplash.com/photo-1562438668-bcf0ca6578f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  'https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  'https://images.unsplash.com/photo-1612320743558-020669ff20e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  'https://images.unsplash.com/photo-1587985064135-0366536eab42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  'https://images.unsplash.com/photo-1564078516393-cf04bd966897?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  'https://images.unsplash.com/photo-1592229506151-845940174bb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  'https://images.unsplash.com/photo-1621293954908-907159247fc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  'https://images.unsplash.com/photo-1630587148265-761cbd139043?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  'https://images.unsplash.com/photo-1718942899965-4fc10607d805?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  'https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  'https://images.unsplash.com/photo-1685592437742-3b56edb46b15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  'https://images.unsplash.com/photo-1656789280583-c5bebda7ca1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
];

export function generateRooms(): Room[] {
  const rooms: Room[] = [];
  let id = 1;

  // Generate 20 Tourist rooms
  for (let i = 0; i < 20; i++) {
    const hasOceanView = Math.random() > 0.6;
    rooms.push({
      id: id++,
      name: roomNames.tourist[i],
      category: 'tourist',
      price: Math.floor(Math.random() * (120 - 60) + 60),
      amenities: [
        amenitiesList.wifi,
        amenitiesList.ac,
        amenitiesList.tv,
        ...(hasOceanView ? [amenitiesList.oceanView] : []),
        ...(Math.random() > 0.5 ? [amenitiesList.safe] : [])
      ],
      image: hotelImages[i % hotelImages.length],
      description: 'Habitación confortable con todas las comodidades esenciales para una estadía placentera.'
    });
  }

  // Generate 18 Premium rooms
  for (let i = 0; i < 18; i++) {
    rooms.push({
      id: id++,
      name: roomNames.premium[i],
      category: 'premium',
      price: Math.floor(Math.random() * (350 - 150) + 150),
      amenities: [
        amenitiesList.wifi,
        amenitiesList.oceanView,
        amenitiesList.ac,
        amenitiesList.minibar,
        amenitiesList.balcony,
        amenitiesList.tv,
        amenitiesList.safe,
        ...(Math.random() > 0.7 ? [amenitiesList.jacuzzi] : [])
      ],
      image: hotelImages[i % hotelImages.length],
      description: 'Suite de lujo con vistas espectaculares y amenidades premium para una experiencia inolvidable.'
    });
  }

  return rooms;
}
