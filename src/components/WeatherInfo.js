import React from "react";

function WeatherInfo({ weather }) {
    if (!weather) return <p>Digite uma cidade para ver o clima.</p>
    const iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
    
    return (
        <div>
            <h2>{weather.name}</h2>
            <img src={iconUrl} alt={weather.weather[0].description} />
            <p>Temperatura: {weather.main.temp}°C</p>
            <p>Descrição: {weather.weather[0].description}</p>
            <p>Umidade: {weather.main.humidity}%</p>
            <p>Vento: {weather.wind.speed} m/s</p>
        </div>
    );
}

export default WeatherInfo;