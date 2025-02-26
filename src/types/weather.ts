export interface GeoLocation {
  name: string;
  lat: number;
  lon: number;
  country: string;
}

export interface WeatherData {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
  weather: Array<{
    description: string;
    icon: string;
  }>;
}

export interface WeatherResponse {
  list: WeatherData[];
  city: {
    name: string;
    country: string;
  };
}

export type MetricType = 'temperature' | 'pressure' | 'humidity' | 'wind';

export interface City {
  id: string;
  name: string;
  data: WeatherData[];
}