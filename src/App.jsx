import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import axios from "axios";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async (city) => {
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
    setError(null);

    try {
      const response = await axios.get(API_URL);
      setWeatherData(response.data);
    } catch (err) {
      console.error(err);
      setWeatherData(null);
      setError(err.response?.data?.message || "An error occurred. Please try again!");
    }
  };

  return (
    <div className="min-h-screen bg-blue-100 flex flex-col items-center justify-start p-4 md:p-8">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-6">
        Weather Dashboard
      </h1>
      <SearchBar onSearch={handleSearch} />
      {error && <p className="text-red-500 text-center text-lg mt-4">{error}</p>}
      <div className="w-full max-w-lg">
        <WeatherCard weatherData={weatherData} onRefresh={() => handleSearch(weatherData?.name)} />
      </div>
    </div>
  );
};

export default App;


