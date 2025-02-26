import React from 'react';
import { MetricType } from '../types/weather';

interface ControlsProps {
  selectedMetric: MetricType;
  granularity: '3h' | '1d';
  onMetricChange: (metric: MetricType) => void;
  onGranularityChange: (granularity: '3h' | '1d') => void;
}

export const Controls: React.FC<ControlsProps> = ({
  selectedMetric,
  granularity,
  onMetricChange,
  onGranularityChange,
}) => {
  return (
    <div className="flex gap-5 items-center my-5">
      <div>
        <label className="mr-2">Метрика: </label>
        <select
          className="p-2 rounded border border-gray-300"
          value={selectedMetric}
          onChange={(e) => onMetricChange(e.target.value as MetricType)}
        >
          <option value="temperature">Температура</option>
          <option value="pressure">Давление</option>
          <option value="humidity">Влажность</option>
          <option value="wind">Ветер</option>
        </select>
      </div>
      <div>
        <label className="mr-2">Интервал: </label>
        <select
          className="p-2 rounded border border-gray-300"
          value={granularity}
          onChange={(e) => onGranularityChange(e.target.value as '3h' | '1d')}
        >
          <option value="3h">3 часа</option>
          <option value="1d">1 день</option>
        </select>
      </div>
    </div>
  );
}; 