export class Weather {
    static dispalyHTMLForm(){
        
        return `
            <h1 class="weather-header">Weather forecast</h1>
            <form>
                <div class="floating">
                    <input id="city-name" class="floating__input" placeholder="City" />
                    <label for="city-name" class="floating__label" data-content="City">
                </div>
                <button id="get-weather-btn"><span id="get-weather-btn-text">GET WEATHER</span></button>
            </form>
            <div id="weather-list"></div>
            `
    }

    static setCityValueIfPosible(){
        document.getElementById('city-name').value = JSON.parse(localStorage.getItem('city'));
    }
    
    static forecast(cityName){
        localStorage.setItem('city', JSON.stringify(cityName));

        const apiKey = '249d0f9002c1194bbde52c002bcaf14d';
    
        return fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&APPID=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                
                return data;
            })
    }

    static renderList(response){
        const weatherList = document.getElementById('weather-list');
        
        if(response.cod >= 300){
            weatherList.innerHTML = '<p class="error-city">Wrong city or town. Try again.</p>';
        } else{
            
            
            const html = `
                <div class="location-name">${response.city.name}, ${response.city.country}</div>
            ` + response.list.map(toList).join('');
            weatherList.innerHTML = html;
    
            for(let i=0; i < response.list.length; i++){
    
                if( new Date(response.list[i].dt_txt).toLocaleDateString() !=
                    new Date(response.list[i+1].dt_txt).toLocaleDateString()){
                        const breakLine = document.createElement('div');
                        breakLine.classList.add('new-line');
                        breakLine.innerHTML = new Date(response.list[i+1].dt_txt).toLocaleDateString();
                        document.getElementById(response.list[i].dt).after(breakLine);
                } else continue;
            }
        }
    }
}


function toList(weatherElement){

    let rain;
    if(weatherElement.hasOwnProperty('rain')){
        rain = weatherElement.rain['3h'] + ' mm';
    } else {
        rain = '-'
    }


    const weatherBlockHTML = `
    <div class="weather-on-hours" id="${weatherElement.dt}">
        <p style="text-align:center">${new Date(weatherElement.dt_txt).toLocaleTimeString()}</p>
        <p style="text-align:center"><img src="https://openweathermap.org/img/wn/${weatherElement.weather[0]['icon']}.png"></p>
        <p>Temperature: ${(weatherElement.main.temp - 273).toFixed(1)} &degC</p>
        <p>Wind: ${weatherElement.wind.speed} km/h</p>
        <p>Humidity: ${weatherElement.main.humidity} %</p>
        <p>Rain: ${rain}</p>
        <p>Pressure: ${(weatherElement.main.pressure * 0.75).toFixed(1)} mm</p>
    </div>
`
    return weatherBlockHTML;
}
