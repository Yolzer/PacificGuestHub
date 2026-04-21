import { useState } from 'react';
import {
  LayoutDashboard,
  DollarSign,
  FileText,
  Sparkles,
  Settings,
  Hotel,
  Calendar,
  TrendingUp,
  Wrench,
  BedDouble
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [prices, setPrices] = useState({
    tourist: 85,
    premium: 220
  });

  const kpiData = [
    {
      title: 'Ocupación Actual',
      value: '28/38',
      subtitle: '73.7% ocupado',
      icon: Hotel,
      color: 'blue'
    },
    {
      title: 'Reservas de Hoy',
      value: '12',
      subtitle: '+3 vs ayer',
      icon: Calendar,
      color: 'green'
    },
    {
      title: 'Ingresos Proyectados',
      value: '$8,450',
      subtitle: 'Este mes',
      icon: TrendingUp,
      color: 'purple'
    },
    {
      title: 'Habitaciones en Mantenimiento',
      value: '2',
      subtitle: 'Retornan mañana',
      icon: Wrench,
      color: 'orange'
    }
  ];

  const occupancyData = [
    { month: 'Ene', occupancy: 65 },
    { month: 'Feb', occupancy: 72 },
    { month: 'Mar', occupancy: 68 },
    { month: 'Abr', occupancy: 75 },
    { month: 'May', occupancy: 82 },
    { month: 'Jun', occupancy: 88 },
    { month: 'Jul', occupancy: 92 },
    { month: 'Ago', occupancy: 90 },
    { month: 'Sep', occupancy: 85 },
    { month: 'Oct', occupancy: 78 },
    { month: 'Nov', occupancy: 73 },
    { month: 'Dic', occupancy: 80 }
  ];

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'pricing', label: 'Tarifas', icon: DollarSign },
    { id: 'reports', label: 'Reportes', icon: FileText },
    { id: 'cleaning', label: 'Limpieza', icon: Sparkles },
    { id: 'settings', label: 'Configuración', icon: Settings }
  ];

  const colorMap: Record<string, { bg: string; text: string; border: string }> = {
    blue: { bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-200' },
    green: { bg: 'bg-green-100', text: 'text-green-600', border: 'border-green-200' },
    purple: { bg: 'bg-purple-100', text: 'text-purple-600', border: 'border-purple-200' },
    orange: { bg: 'bg-orange-100', text: 'text-orange-600', border: 'border-orange-200' }
  };

  const handlePriceUpdate = (category: 'tourist' | 'premium', newPrice: number) => {
    setPrices(prev => ({ ...prev, [category]: newPrice }));
  };

  return (
    <div className="flex h-screen bg-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 border-r border-gray-700 flex flex-col">
        <div className="p-6 border-b border-gray-700">
          <div className="flex items-center gap-3">
            <BedDouble className="w-8 h-8 text-blue-400" />
            <div>
              <h1 className="text-xl font-bold text-white">Pacific GuestHub</h1>
              <p className="text-sm text-gray-400">Admin Panel</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {menuItems.map(item => {
              const Icon = item.icon;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      activeTab === item.id
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="p-4 border-t border-gray-700">
          <div className="flex items-center gap-3 px-4 py-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
              HS
            </div>
            <div>
              <p className="font-semibold text-white">Han Solo</p>
              <p className="text-sm text-gray-400">Administrador</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">Dashboard de Gestión</h2>
            <p className="text-gray-400">Bienvenido de vuelta, Han Solo</p>
          </div>

          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {kpiData.map((kpi, index) => {
              const Icon = kpi.icon;
              const colors = colorMap[kpi.color];
              return (
                <div
                  key={index}
                  className={`bg-gray-800 rounded-xl p-6 border-2 ${colors.border} hover:shadow-lg transition-shadow`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center`}>
                      <Icon className={`w-6 h-6 ${colors.text}`} />
                    </div>
                  </div>
                  <h3 className="text-sm text-gray-400 mb-2">{kpi.title}</h3>
                  <p className="text-3xl font-bold text-white mb-1">{kpi.value}</p>
                  <p className="text-sm text-gray-500">{kpi.subtitle}</p>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Pricing Management */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Gestión de Precios</h3>

              <div className="space-y-4">
                <div className="bg-gray-700 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <p className="font-semibold text-white">Habitación Turista</p>
                      <p className="text-sm text-gray-400">20 habitaciones</p>
                    </div>
                    <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-semibold">
                      Activo
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-gray-400">$</span>
                    <input
                      type="number"
                      value={prices.tourist}
                      onChange={(e) => handlePriceUpdate('tourist', Number(e.target.value))}
                      className="flex-1 bg-gray-600 text-white px-4 py-2 rounded-lg border-2 border-gray-500 focus:border-blue-500 focus:outline-none"
                    />
                    <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors">
                      Actualizar
                    </button>
                  </div>
                </div>

                <div className="bg-gray-700 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <p className="font-semibold text-white">Habitación Premium</p>
                      <p className="text-sm text-gray-400">18 habitaciones</p>
                    </div>
                    <span className="px-3 py-1 bg-amber-600 text-white rounded-full text-sm font-semibold">
                      Premium
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-gray-400">$</span>
                    <input
                      type="number"
                      value={prices.premium}
                      onChange={(e) => handlePriceUpdate('premium', Number(e.target.value))}
                      className="flex-1 bg-gray-600 text-white px-4 py-2 rounded-lg border-2 border-gray-500 focus:border-blue-500 focus:outline-none"
                    />
                    <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors">
                      Actualizar
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Occupancy Chart */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Tendencia de Ocupación Mensual</h3>

              <ResponsiveContainer width="100%" height={280}>
                <LineChart data={occupancyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="month" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#1F2937',
                      border: '1px solid #374151',
                      borderRadius: '8px',
                      color: '#fff'
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="occupancy"
                    stroke="#3B82F6"
                    strokeWidth={3}
                    dot={{ fill: '#3B82F6', r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
