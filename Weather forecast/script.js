const options ={
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'bb744abf63mshd1700b15a632d9bp1558c5jsn82ea8d95586f',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
  }
};

const getWeather = (city) =>{
  cityName.innerHTML = city
  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city,options)
    .then(response => response.json())
    .then(response => {

      console.log(response)
      
      cloud_pct.innerHTML = response.cloud_pct
      temp.innerHTML = response.temp
      humidity.innerHTML = response.humidity
      min_temp.innerHTML = response.min_temp
      max_temp.innerHTML = response.max_temp
      wind_speed.innerHTML = response.wind_speed
      sunrise.innerHTML = response.sunrise
      sunset.innerHTML = response.sunset
      feels_like.innerHTML = response.feels_like
    })
    .catch(err => console.error(err));
}

const sr_weather = (city) =>{
  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city,options)
    .then(response => response.json())
    .then(response => {

      console.log(response)
      
      sr_cld.innerHTML = response.cloud_pct
      sr_temp.innerHTML = response.temp
      sr_humi.innerHTML = response.humidity
      sr_feel.innerHTML = response.feels_like
    })
    .catch(err => console.error(err));
}
const pa_weather = (city) =>{
  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city,options)
    .then(response => response.json())
    .then(response => {

      console.log(response)
      
      pa_cld.innerHTML = response.cloud_pct
      pa_temp.innerHTML = response.temp
      pa_humi.innerHTML = response.humidity
      pa_feel.innerHTML = response.feels_like
    })
    .catch(err => console.error(err));
}
const br_weather = (city) =>{
  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city,options)
    .then(response => response.json())
    .then(response => {

      console.log(response)
      
      br_cld.innerHTML = response.cloud_pct
      br_temp.innerHTML = response.temp
      br_humi.innerHTML = response.humidity
      br_feel.innerHTML = response.feels_like
    })
    .catch(err => console.error(err));
}
const ny_weather = (city) =>{
  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city,options)
    .then(response => response.json())
    .then(response => {

      console.log(response)
      
      ny_cld.innerHTML = response.cloud_pct
      ny_temp.innerHTML = response.temp
      ny_humi.innerHTML = response.humidity
      ny_feel.innerHTML = response.feels_like
    })
    .catch(err => console.error(err));
}

submit.addEventListener("click", (e)=>{
  e.preventDefault()
  getWeather(ip.value)
})
dl.addEventListener("click", (e)=>{
  e.preventDefault()
  getWeather("Delhi")
})
mb.addEventListener("click", (e)=>{
  e.preventDefault()
  getWeather("Mumbai")
})
pt.addEventListener("click", (e)=>{
  e.preventDefault()
  getWeather("Patna")
})
getWeather("Delhi")
sr_weather("Srinagar")
pa_weather("Paris")
br_weather("Berlin")
ny_weather("New york")







// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'bb744abf63mshd1700b15a632d9bp1558c5jsn82ea8d95586f',
// 		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
// 	}
// };

// (async () => {
//     try {
//       const response  = await fetch(url, options);
//       const response = await response.text();
//       console.log(response);
//       cloud_pct.innerHTML = response.cloud_pct
//       temp.innerHTML = response.temp
//       humidity.innerHTML = response.humidity
//       min_temp.innerHTML = response.min_temp
//       max_temp.innerHTML = response.max_temp
//       wind_speed.innerHTML = response.wind_speed
//       sunrise.innerHTML = response.sunrise
//       sunset.innerHTML = response.sunset
//       feels_like.innerHTML = response.feels_like
//     } catch (error) {
//       console.error(error);
//     }
//   })();
