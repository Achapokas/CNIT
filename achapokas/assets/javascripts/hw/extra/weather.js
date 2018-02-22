// Records
// Past Weather
// Calculate hours of daylight left

function request(inputZip) {
  const request = new Request('http://api.openweathermap.org/data/2.5/weather?zip=' + inputZip + ',us&APPID=b440e89996864e5c730b1e07b7f7d0e2' );
  const myUrl = request.url;
  const myMethod = request.method;
  const myCred = request.credentials;

  fetch(request)
    .then(response => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error('Something went wrong');
      }
    })
    .then(response => {
      weatherResults(response)
      console.log(response)
    })
}


function weatherResults(response) {
  // unix tick units are seconds so we must multiply by 1000
   const main = response.weather[0].main,
         temp = response.main.temp,
         speed = response.wind.speed,
         icon = response.weather[0].icon,
         description = response.weather[0].description,
         container = document.getElementById("container"),
         current = new Date()
         sunrise = response.sys.sunrise,
         sunriseConverstion = newDate(sunrise),
         sunset = response.sys.sunset,
         sunsetConverstion = newDate(sunset);

         function newDate(time) {
           return new Date(time * 1000)
         }

         function sunlight(currentTime, sunset) {
          // Will calculate how much sunlight is left in the day.
          // Considering building a countdown timer.

            const currentHour = currentTime.getHours(),
                  sunsetHour = sunset.getHours()
                  currentMinute = currentTime.getMinutes(),
                  sunsetMinute = sunset.getMinutes(),
                  hoursLeft = parseInt(sunsetHour - currentHour),
                  minutesLeft = parseInt(sunsetMinute - currentMinute);

                  if (hoursLeft < 0) {
                    return 0
                  }


                  return hoursLeft + ':' + minutesLeft
         }

  const template = `<div class= "current">
    <img src="http://openweathermap.org/img/w/${icon}.png" alt="${description}">
    <p>${main}</p>
    <p>${temp}</p>
    <p>${speed}</p>
    <p>${current}</p>
    <p>${sunriseConverstion}</p>
    <p>${sunsetConverstion}</p>
    <p>${sunlight(current, sunsetConverstion)}</p>
  </div>`;

  container.insertAdjacentHTML('beforeend' ,template);
}

function init() {
  document.getElementById("weather").addEventListener("submit", function(event){
    const zip = document.getElementById("zip"),
          inputZip = zip.value;

          event.preventDefault();
          request(inputZip)
  });

}

init()
