import React, { useState } from 'react';
import { weatherService } from '../services/weatherService';
import { City } from '../types/weather';
import { v4 as uuidv4 } from 'uuid';

interface SearchBarProps {
  onCityAdd: (city: City) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onCityAdd }) => {
  const [cityName, setCityName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    if (!cityName.trim()) return;

    try {
      setIsLoading(true);
      const coordinates = await weatherService.getCoordinates(cityName);
      const weatherData = await weatherService.getWeatherForecast(
        coordinates.lat,
        coordinates.lon
      );

      onCityAdd({
        id: uuidv4(),
        name: coordinates.name,
        data: weatherData.list
      });

      setCityName('');
    } catch (error) {
      console.error('Ошибка при поиске города:', error);
      alert('Город не найден или произошла ошибка при получении данных');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mb-5 flex justify-start gap-2 md:flex-row flex-col">
      <input
        type="text"
        className="px-4 py-2 text-base border border-gray-300 rounded focus:outline-none focus:border-neutral-700 lg:w-[30%] md:w-[50%] w-full transition-all duration-300"
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
        placeholder="Введите название города"
        onKeyDown={(e) => e.key === 'Enter' && handleSearch()} 
      />
      <button
        className="px-4 py-2 text-base bg-neutral-800 text-white rounded hover:bg-neutral-700 
          disabled:opacity-50 transition-all duration-300"
        onClick={handleSearch}
        disabled={isLoading}
      >
        {isLoading ? 'Загрузка...' : 'Добавить город'}
      </button>
    </div>
  );
};