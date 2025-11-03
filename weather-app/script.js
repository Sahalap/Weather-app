async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = 'c8e9ff2fd43229cf52770d4727b33268'; // Replace this with your actual OpenWeather API key
  
    if (!city) {
      alert('Please enter a city name');
      return;
    }
  
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('City not found');
      }
  
      const data = await response.json();
      console.log(data); // Useful for debugging and learning
  
      const weather = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Condition: ${data.weather[0].main}</p>
      `;
  
      document.getElementById('weatherResult').innerHTML = weather;
    } catch (error) {
      document.getElementById('weatherResult').innerHTML = `<p>${error.message}</p>`;
    }
  }
  