import './style.css';
import {showAndHideLeftBar} from './sidebar';
import {Weather} from './weather';
import {dispalyExchangePage, getCurrencyRate, showAllCurrencies} from './exchange'
import {showContacts} from './contacts'
import {showInfo} from './info'

const slideButton = document.getElementById('slide-btn');
const slideImg = document.getElementById('left-arrow-img');
slideButton.addEventListener('click', showAndHideLeftBar);
slideImg.addEventListener('click', showAndHideLeftBar);


const weatherBtn = document.getElementById('weather-btn');
const exchangeBtn = document.getElementById('exchange-btn');
const infoBtn = document.getElementById('info-btn');
const contactBtn = document.getElementById('contact-btn');
const mainContentBlock = document.getElementById('main-content-block');

weatherBtn.addEventListener('click', weather);
exchangeBtn.addEventListener('click', exchange);
infoBtn.addEventListener('click', info)
contactBtn.addEventListener('click', constacts)

function weather(){

    weatherBtn.classList.add('current');
    exchangeBtn.classList.remove('current');
    infoBtn.classList.remove('current');
    contactBtn.classList.remove('current');

    const weatherHTML = Weather.dispalyHTMLForm();
    mainContentBlock.innerHTML = weatherHTML;

    Weather.setCityValueIfPosible();
    const getWeatherBtn = document.getElementById('get-weather-btn');
    getWeatherBtn.addEventListener('click', getCurrentWeather);

    function getCurrentWeather(event){
        event.preventDefault();
        getWeatherBtn.disabled = true;
        const cityName = document.getElementById('city-name').value;
        
        Weather.forecast(cityName)
            .then(response => {
                getWeatherBtn.disabled = false;
                Weather.renderList(response);
            })

    }   

}
function exchange(){

    weatherBtn.classList.remove('current');
    exchangeBtn.classList.add('current');
    infoBtn.classList.remove('current');
    contactBtn.classList.remove('current');

    const exchangeHTML = dispalyExchangePage();
    mainContentBlock.innerHTML = exchangeHTML;

    const convertCurrencyBtn = document.getElementById('get-exchange-btn');

    convertCurrencyBtn.addEventListener('click', convertMoney);

    function convertMoney(event){
        event.preventDefault();
        convertCurrencyBtn.disabled = true;

        getCurrencyRate()
            .then(list => {
                convertCurrencyBtn.disabled = false;
                showAllCurrencies(list)
            })
    }

}
function info(){
    weatherBtn.classList.remove('current');
    exchangeBtn.classList.remove('current');
    infoBtn.classList.add('current');
    contactBtn.classList.remove('current');

    mainContentBlock.innerHTML = showInfo();
}
function constacts(){
    weatherBtn.classList.remove('current');
    exchangeBtn.classList.remove('current');
    infoBtn.classList.remove('current');
    contactBtn.classList.add('current');

    mainContentBlock.innerHTML = showContacts();
}








