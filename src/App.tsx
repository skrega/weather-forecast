import React, { useState } from 'react';
import { WeatherChart } from './components/WeatherChart';
import { SearchBar } from './components/SearchBar';
import { Controls } from './components/Controls';
import { City, MetricType } from './types/weather';

const App = () => {
  const [cities, setCities] = useState<City[]>([]);
  const [selectedMetric, setSelectedMetric] = useState<MetricType>('temperature');
  const [granularity, setGranularity] = useState<'3h' | '1d'>('3h');

  const handleGranularityChange = (newGranularity: '3h' | '1d') => {
    setGranularity(newGranularity);
  };

  return (
    <div className="max-w-6xl mx-auto p-5">
      <SearchBar onCityAdd={(city) => setCities([...cities, city])} />
      <Controls
        selectedMetric={selectedMetric}
        granularity={granularity}
        onMetricChange={setSelectedMetric}
        onGranularityChange={handleGranularityChange}
      />
      <WeatherChart 
        cities={cities}
        selectedMetric={selectedMetric}
        granularity={granularity}
      />
    </div>
  );
};

export default App; 