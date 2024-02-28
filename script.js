function kirim(){
  let pilihan_kota=document.getElementById('pilih_kota').value;
  const city = pilihan_kota;
  const apiKey = 'a6ab08ce4391df9af7a8c3ea7dc339f6';

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

if(pilihan_kota){
  fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const weatherInfo = `
      <p>Location: ${data.name}</p>
      <p>Temperature: ${data.main.temp}°C</p>
      <p>Weather: ${data.weather[0].main}</p>
      <p>Description: ${data.weather[0].description}</p>
    `;
    document.querySelector('.weather-info').innerHTML = weatherInfo;
  })
  .catch(error => {
    console.error('Error fetching weather data:', error);
    document.querySelector('.weather-info').innerHTML = '<p>Failed to fetch weather data. Please try again later.</p>';
  });  
}


}



