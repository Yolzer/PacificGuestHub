import { BedDouble, Globe } from 'lucide-react';
import { Link } from 'react-router';

interface HeaderProps {
  language: 'ES' | 'EN';
  onLanguageToggle: () => void;
}

export function Header({ language, onLanguageToggle }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <BedDouble className="w-8 h-8 text-blue-600" />
          <h1 className="text-2xl font-bold text-gray-900">Pacific GuestHub</h1>
        </Link>

        <button
          onClick={onLanguageToggle}
          className="flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors"
        >
          <Globe className="w-5 h-5" />
          <span className="font-semibold">{language}</span>
        </button>
      </div>
    </header>
  );
}
