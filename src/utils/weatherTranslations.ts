export const weatherTranslations: { [key: string]: string } = {
  'clear sky': 'ясно',
  'few clouds': 'небольшая облачность',
  'scattered clouds': 'переменная облачность',
  'broken clouds': 'облачно с прояснениями',
  'overcast clouds': 'пасмурно',
  'light rain': 'небольшой дождь',
  'moderate rain': 'умеренный дождь',
  'heavy rain': 'сильный дождь',
  'rain': 'дождь',
  'thunderstorm': 'гроза',
  'snow': 'снег',
  'light snow': 'небольшой снег',
  'mist': 'туман',
  'fog': 'туман',
  'drizzle': 'морось',
  // добавьте другие погодные условия по необходимости
};

export const translateWeather = (description: string): string => {
  return weatherTranslations[description.toLowerCase()] || description;
}; 