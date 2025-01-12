const WeatherCard = ({ weatherData, onRefresh }) => {
    if (!weatherData) {
      return <p className="text-gray-500 text-center">Search for a city to see weather details!</p>;
    }
  
    const { name, main, wind, weather } = weatherData;
  
    return (
      <div className="p-6 bg-white rounded-lg shadow-lg text-center mt-6 max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">{name}</h2>
        <p className="text-lg text-gray-600 capitalize">{weather[0].description}</p>
        <p className="text-4xl font-bold text-blue-500 my-4">{Math.round(main.temp)}°C</p>
        <div className="flex justify-around text-gray-700 text-sm">
          <p>Humidity: {main.humidity}%</p>
          <p>Wind: {Math.round(wind.speed)} km/h</p>
        </div>
        <button
          className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
          onClick={onRefresh}
        >
          Refresh
        </button>
      </div>
    );
  };
  
  export default WeatherCard;
  
  
  