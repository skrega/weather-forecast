import React from 'react';
import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line, ResponsiveContainer } from 'recharts';
import { City, MetricType, WeatherData } from '../types/weather';
import { translateWeather } from '../utils/weatherTranslations';
import { TooltipProps } from 'recharts';
import { ValueType, NameType } from 'recharts/types/component/DefaultTooltipContent';

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7300', '#00C49F'];

const getMetricValue = (data: WeatherData, metric: MetricType): number => {
  switch (metric) {
    case 'temperature':
      return data.main.temp;
    case 'pressure':
      return data.main.pressure;
    case 'humidity':
      return data.main.humidity;
    case 'wind':
      return data.wind.speed;
    default:
      return 0;
  }
};

const getMetricLabel = (metric: MetricType): string => {
  switch (metric) {
    case 'temperature':
      return 'Температура (°C)';
    case 'pressure':
      return 'Давление (hPa)';
    case 'humidity':
      return 'Влажность (%)';
    case 'wind':
      return 'Скорость ветра (м/с)';
    default:
      return '';
  }
};

const formatDate = (timestamp: number): string => {
  return new Date(timestamp * 1000).toLocaleString('ru-RU', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

interface WeatherChartProps {
  cities: City[];
  selectedMetric: MetricType;
  granularity: '3h' | '1d';
}

const CustomTooltip = ({
  active,
  payload
}: TooltipProps<ValueType, NameType>) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    const description = translateWeather(data.weather[0].description);
    return (
      <div className="bg-white p-3 border border-gray-200 rounded shadow">
        <p>{formatDate(data.dt)}</p>
        <p>Температура: {data.main.temp.toFixed(1)}°C</p>
        <p>Давление: {data.main.pressure} hPa</p>
        <p>Влажность: {data.main.humidity}%</p>
        <p>Ветер: {data.wind.speed} м/с</p>
        <p>Погода: {description}</p>
      </div>
    );
  }
  return null;
};

export const WeatherChart: React.FC<WeatherChartProps> = ({
  cities,
  selectedMetric,
  granularity
}) => {
  return (
    <div className="h-[400px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="dt"
            tickFormatter={formatDate}
            type="number"
            domain={['dataMin', 'dataMax']}
          />
          <YAxis label={{ value: getMetricLabel(selectedMetric), angle: -90, position: 'insideLeft' }} />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          {cities.map((city, index) => (
            <Line
              key={city.id}
              type="monotone"
              data={city.data}
              dataKey={(item: WeatherData) => getMetricValue(item, selectedMetric)}
              name={city.name}
              stroke={COLORS[index % COLORS.length]}
              dot={granularity === '1d'}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}; 