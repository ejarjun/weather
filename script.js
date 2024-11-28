const apiKey = "5fe36b192ffd1c36dffb6752bc1722b2";

document.getElementById("searchButton").addEventListener("click", () => {
  const city = document.getElementById("cityInput").value;
  if (city) {
    fetchWeather(city);
  } else {
    alert("Please enter a city name.");
  }
});

async function fetchWeather(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();
    updateWeather(data);
  } catch (error) {
    alert(error.message);
  }
}

function updateWeather(data) {
  const { name, main, weather, sys, wind } = data;

  document.getElementById("temperature").textContent = `${main.temp}°C`;
  document.getElementById("description").textContent = weather[0].description;
  document.getElementById("city").textContent = name;
  document.getElementById("country").textContent = sys.country;
  document.getElementById("humidity").textContent = `${main.humidity}%`;
  document.getElementById("wind").textContent = `${wind.speed} Kmph`;
  document.getElementById("pressure").textContent = `${main.pressure} hPa`;

  document.getElementById("details").textContent =
    `Feels like ${main.feels_like}°C. Min: ${main.temp_min}°C, Max: ${main.temp_max}°C.`;
}
