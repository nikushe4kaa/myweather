function getWeather() {
    const city = 'El Fraile'; // Або інше місто
    const apiKey = 'b58c23d334ec4049ea5996ea34106952'; // Замініть на свій API ключ з openweathermap.org
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ua`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const temperature = data.main.temp;
        const humidity = data.main.humidity;
        const windSpeed = data.wind.speed;
  
        document.getElementById('weather').innerHTML = `
          <p>Температура: ${temperature} °C</p>
          <p>Вологість: ${humidity}%</p>
          <p>Швидкість вітру: ${windSpeed} м/с</p>
        `;
      })
      .catch(error => {
        document.getElementById('weather').textContent = 'Не вдалося отримати дані.';
        console.error(error);
      });
  }
  
  