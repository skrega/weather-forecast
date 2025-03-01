# Weather Forecast App

Приложение для отслеживания прогноза погоды в разных городах с визуализацией данных в виде графиков.

## Технологии

- React + TypeScript
- Vite
- Tailwind CSS
- Recharts для графиков
- OpenWeatherMap API

## Установка и запуск

1. Клонируйте репозиторий:
```bash
git clone https://github.com/skrega/weather-forecast.git
cd weather-forecast
```

2. Установите зависимости:
```bash
npm install
```

3. Настройте API ключ:
   - Создайте файл `.env` в корневой директории проекта
   - Скопируйте содержимое из `.env.example`
   - Получите API ключ на [OpenWeatherMap](https://openweathermap.org/api)
   - Замените `your_api_key` в файле `.env`:
   ```
   VITE_OPENWEATHER_API_KEY=your_api_key
   ```

4. Запустите проект:
```bash
npm run dev
```

## Функционал

- Поиск городов
- Отображение прогноза погоды в виде графиков
- Выбор метрик (температура, давление, влажность, ветер)
- Поддержка нескольких городов одновременно
- Адаптивный дизайн

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
