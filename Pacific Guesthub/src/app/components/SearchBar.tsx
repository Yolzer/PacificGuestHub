import { useState } from 'react';
import { Calendar, Users, BedDouble, Search } from 'lucide-react';
import { format } from 'date-fns';
import { es, enUS } from 'date-fns/locale';
import { DayPicker } from 'react-day-picker';
import { useNavigate } from 'react-router';
import * as Popover from '@radix-ui/react-popover';
import * as Select from '@radix-ui/react-select';
import 'react-day-picker/dist/style.css';

interface SearchBarProps {
  language: 'ES' | 'EN';
}

export function SearchBar({ language }: SearchBarProps) {
  const navigate = useNavigate();
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [guests, setGuests] = useState('2');
  const [roomType, setRoomType] = useState('standard');
  const [showCheckInCalendar, setShowCheckInCalendar] = useState(false);
  const [showCheckOutCalendar, setShowCheckOutCalendar] = useState(false);

  const locale = language === 'ES' ? es : enUS;

  const handleSearch = () => {
    navigate('/rooms');
  };

  const labels = {
    ES: {
      checkIn: 'Fecha Entrada',
      checkOut: 'Fecha Salida',
      guests: 'Huéspedes',
      roomType: 'Tipo de Habitación',
      search: 'Buscar',
      selectDate: 'Seleccionar fecha',
      standard: 'Estándar',
      deluxe: 'Deluxe',
      suite: 'Suite',
      presidential: 'Presidencial'
    },
    EN: {
      checkIn: 'Check-In',
      checkOut: 'Check-Out',
      guests: 'Guests',
      roomType: 'Room Type',
      search: 'Search',
      selectDate: 'Select date',
      standard: 'Standard',
      deluxe: 'Deluxe',
      suite: 'Suite',
      presidential: 'Presidential'
    }
  };

  const content = labels[language];

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {/* Check-In Date */}
        <Popover.Root open={showCheckInCalendar} onOpenChange={setShowCheckInCalendar}>
          <Popover.Trigger asChild>
            <button className="flex flex-col items-start p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 transition-colors text-left">
              <div className="flex items-center gap-2 text-gray-600 mb-2">
                <Calendar className="w-5 h-5" />
                <span className="text-sm font-medium">{content.checkIn}</span>
              </div>
              <span className="text-lg font-semibold text-gray-900">
                {checkIn ? format(checkIn, 'dd/MM/yyyy', { locale }) : content.selectDate}
              </span>
            </button>
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Content className="bg-white rounded-lg shadow-xl p-4 z-50" sideOffset={5}>
              <DayPicker
                mode="single"
                selected={checkIn}
                onSelect={(date) => {
                  setCheckIn(date);
                  setShowCheckInCalendar(false);
                }}
                locale={locale}
                disabled={{ before: new Date() }}
                className="border-0"
              />
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>

        {/* Check-Out Date */}
        <Popover.Root open={showCheckOutCalendar} onOpenChange={setShowCheckOutCalendar}>
          <Popover.Trigger asChild>
            <button className="flex flex-col items-start p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 transition-colors text-left">
              <div className="flex items-center gap-2 text-gray-600 mb-2">
                <Calendar className="w-5 h-5" />
                <span className="text-sm font-medium">{content.checkOut}</span>
              </div>
              <span className="text-lg font-semibold text-gray-900">
                {checkOut ? format(checkOut, 'dd/MM/yyyy', { locale }) : content.selectDate}
              </span>
            </button>
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Content className="bg-white rounded-lg shadow-xl p-4 z-50" sideOffset={5}>
              <DayPicker
                mode="single"
                selected={checkOut}
                onSelect={(date) => {
                  setCheckOut(date);
                  setShowCheckOutCalendar(false);
                }}
                locale={locale}
                disabled={{ before: checkIn || new Date() }}
                className="border-0"
              />
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>

        {/* Guests */}
        <div className="flex flex-col items-start p-4 border-2 border-gray-200 rounded-lg">
          <div className="flex items-center gap-2 text-gray-600 mb-2">
            <Users className="w-5 h-5" />
            <span className="text-sm font-medium">{content.guests}</span>
          </div>
          <select
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className="text-lg font-semibold text-gray-900 bg-transparent border-0 outline-none w-full cursor-pointer"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
        </div>

        {/* Room Type */}
        <div className="flex flex-col items-start p-4 border-2 border-gray-200 rounded-lg">
          <div className="flex items-center gap-2 text-gray-600 mb-2">
            <BedDouble className="w-5 h-5" />
            <span className="text-sm font-medium">{content.roomType}</span>
          </div>
          <select
            value={roomType}
            onChange={(e) => setRoomType(e.target.value)}
            className="text-lg font-semibold text-gray-900 bg-transparent border-0 outline-none w-full cursor-pointer"
          >
            <option value="standard">{content.standard}</option>
            <option value="deluxe">{content.deluxe}</option>
            <option value="suite">{content.suite}</option>
            <option value="presidential">{content.presidential}</option>
          </select>
        </div>
      </div>

      {/* Search Button */}
      <button
        onClick={handleSearch}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg flex items-center justify-center gap-3 transition-colors text-lg shadow-lg"
      >
        <Search className="w-6 h-6" />
        {content.search}
      </button>
    </div>
  );
}
