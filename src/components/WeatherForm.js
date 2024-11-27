import React from "react";

function WeatherForm({ onSubmit }){
    const handleSubmit = (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value.trim();
        if (city) {
            onSubmit(city);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            name="city"
            placeholder="Digite o nome da cidade"
            required
            />
            <button type="submit">Buscar</button>
        </form>
    );
};

export default WeatherForm;