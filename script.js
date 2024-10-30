async function fetchWeather() {
    const apiKey = 'Y1160fd26f0c84d39ae640021243010';  // Gantilah dengan API Key Anda
    const city = document.getElementById('cityInput').value || 'Jakarta';  // Default kota Jakarta
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`);
    const data = await response.json();

    document.getElementById('location').textContent = data.location.name;
    document.getElementById('temperature').textContent = data.current.temp_c;
    document.getElementById('description').textContent = data.current.condition.text;
}

// Fetch weather for a default city on load
fetchWeather();
