import axios from 'axios';
import { GeoLocation, WeatherResponse } from '../types/weather';

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
const API_URL = import.meta.env.VITE_OPENWEATHER_API_URL;
const GEO_API_URL = import.meta.env.VITE_OPENWEATHER_GEO_API_URL;

export const weatherService = {
  async getCoordinates(city: string): Promise<GeoLocation> {
    const response = await axios.get(
      `${GEO_API_URL}/direct?q=${city}&limit=1&appid=${API_KEY}`
    );
    return response.data[0];
  },

  async getWeatherForecast(lat: number, lon: number): Promise<WeatherResponse> {
    const response = await axios.get(
      `${API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );
    return response.data;
  }
};