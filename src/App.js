import React, { useState } from 'react';
import WeatherInfo from './components/WeatherInfo';
import WeatherFrom from './components/WeatherForm';
import "./index.css";
import { ClipLoader } from "react-spinners";

function App() {
  const [weather, setWeather] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchWeather = async (city) => {
    const apiKey = "SUA_API_KEY" 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=pt_br&appid=${apiKey}` 
    setIsLoading(true); 
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Cidade não encontrada");        
      }
      const data = await response.json();
      setWeather(data);      
    } catch (error) {
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };
    

  return (
    <div className="App">
      <h1>App Clima Tempo</h1>
      <WeatherFrom onSubmit={fetchWeather} />
      {isLoading ? <ClipLoader color="#555" size={50} /> : <WeatherInfo weather={weather} />}
    </div>
  );
}

export default App;
