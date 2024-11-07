const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeather API Key

async function getWeather() {
  const city = document.getElementById('search').value || 'Kakkanad';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === 200) {
      document.getElementById('temperature').textContent = `${data.main.temp}°C`;
      document.getElementById('description').textContent = `${data.weather[0].description}, Feels like ${data.main.feels_like}°C`;
      document.getElementById('location').textContent = data.name;
      document.getElementById('country').textContent = data.sys.country;
      document.getElementById('humidity').textContent = `${data.main.humidity}%`;
      document.getElementById('wind').textContent = `${data.wind.speed} Kmph`;
      document.getElementById('pressure').textContent = data.main.pressure;
      document.getElementById('time').textContent = new Date().toLocaleString();
    } else {
      alert('City not found!');
    }
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
}
