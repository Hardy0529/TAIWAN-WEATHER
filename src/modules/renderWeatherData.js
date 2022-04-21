import { getWeatherDataWeek, getWeatherData36Hours } from "./tool.js";
import { getWeatherSVG } from "./weather-svg.js"

let hoursWeatherData = null;
let weekWeatherData = null;

const unitWeatherOfPage = 3;
let weatherNum = 0;
const weatherContainer = document.querySelector(".weather__render");
const weatherObserver = document.querySelector(".weather__render-observer");
const timeRefresh = document.querySelector(".weather__UpdateTime > span");
const iconRefresh = document.querySelector(".icon-arrows-cw");
// 設定監聽條件
const observerCallback = ([entry]) => {
    if (entry && entry.isIntersecting) {
        renderWeather();
        weatherNum++;
    }
};
// 建立一個 intersection observer
const observer = new IntersectionObserver(observerCallback);


export function renderWeather(locationName=null) {
    let startIndex = unitWeatherOfPage * weatherNum;
    let maxLength = Math.min(hoursWeatherData.length, unitWeatherOfPage * (weatherNum + 1));
    if(locationName) {
        startIndex = hoursWeatherData.findIndex((element) => element.locationName == locationName);
        maxLength = startIndex + 1;
        observer.unobserve(weatherObserver);
    }
    if(startIndex > maxLength) {
        observer.unobserve(weatherObserver);
    }
    renderWeather36Hours(startIndex, maxLength, locationName);
}

function renderWeather36Hours(startIndex, maxLength, locationName=null) {
    for(let i = startIndex; i < maxLength; i++) {
        const weatherData=hoursWeatherData[i]
        const label = document.createElement("label");
        label.classList.add("weather__itme");
        const input = document.createElement("input");
        input.classList.add("switch_weather");
        input.type = "checkbox";

        // weekinfo
        const weatherWeekWeather = document.createElement("div");
        weatherWeekWeather.classList.add("weather__weekWeather");
        renderWeatherWeek(weatherData.locationName, weatherWeekWeather);

        const weatherInfoCountry = document.createElement("div");
        weatherInfoCountry.textContent = weatherData.locationName;
        weatherInfoCountry.classList.add("weather__info-county");
        const weatherInfoTemperate = document.createElement("div");
        weatherInfoTemperate.textContent = `${weatherData.MaxT[0]}°C`;
        weatherInfoTemperate.classList.add("weather__info-temperature");
        const weatherInfoMeteorological = document.createElement("div");
        weatherInfoMeteorological.textContent = weatherData.Wx[0];
        weatherInfoMeteorological.classList.add("weather__info-meteorological");
        const weatherInfoContainer = document.createElement("div");
        weatherInfoContainer.appendChild(weatherInfoTemperate);
        weatherInfoContainer.appendChild(weatherInfoMeteorological);
        const weatherInfo = document.createElement("div");
        weatherInfo.classList.add("weather__info");
        weatherInfo.appendChild(weatherInfoCountry);
        weatherInfo.appendChild(weatherInfoContainer);

        const weatherChart = document.createElement("div");
        weatherChart.classList.add("weather__chart");
        for(let j = 0; j < weatherData.time.length; j++) {
            const weatherDayWeather = document.createElement("div");
            weatherDayWeather.classList.add("weather__dayweather");

            const weatherChartTime = document.createElement("div");
            weatherChartTime.classList.add("weather__chart-time");
            const time = new Date(weatherData.time[j]);
            weatherChartTime.textContent = `${time.getHours()} ${ (time.getHours() >= 12) ? "PM" : "AM" }`;
            
            const weatherDayWeatherIcon = document.createElement("div");
            weatherDayWeatherIcon.classList.add("weather__dayweather-icon");
            weatherDayWeatherIcon.appendChild(getWeatherSVG(weatherData.Wx2[j]));

            const weatherChartTemperature = document.createElement("div");
            weatherChartTemperature.classList.add("weather__chart-temperature");
            const weatherChartTemperatureMax = document.createElement("div");
            const weatherChartTemperatureMin = document.createElement("div");
            weatherChartTemperatureMax.textContent = `${weatherData.MaxT[j]}°`;
            weatherChartTemperatureMin.textContent = `${weatherData.MinT[j]}°`;
            weatherChartTemperature.appendChild(weatherChartTemperatureMax);
            weatherChartTemperature.appendChild(weatherChartTemperatureMin);
            
            weatherDayWeather.appendChild(weatherChartTime);
            weatherDayWeather.appendChild(weatherDayWeatherIcon);
            weatherDayWeather.appendChild(weatherChartTemperature);

            weatherChart.appendChild(weatherDayWeather);
        }

        label.appendChild(input);
        label.appendChild(weatherWeekWeather);
        label.appendChild(weatherInfo);
        label.appendChild(weatherChart);

        weatherContainer.appendChild(label);
    }
}

const weekConfig = {
    "0": "SUN",
    "1": "MON",
    "2": "TUE",
    "3": "WED",
    "4": "THU",
    "5": "FRI",
    "6": "SAT",
}

function renderWeatherWeek(locationName, container) {
    const index = weekWeatherData.findIndex((element) => element.locationName == locationName);
    const weatherData = weekWeatherData[index];
    for(let i = 0; i < weatherData.time.length; i++) {
        const weatherWeekItem = document.createElement("div");
        weatherWeekItem.classList.add("weather__weekWeather-item");

        const day = new Date(weatherData.time[i]).getDay();
        const weatherWeekItemDay = document.createElement("h3");
        weatherWeekItemDay.textContent = weekConfig[day];
        
        weatherWeekItem.appendChild(weatherWeekItemDay);
        weatherWeekItem.append(getWeatherSVG(weatherData.Wx2[i]));

        container.appendChild(weatherWeekItem);
    }
}

async function init() {
    hoursWeatherData = await getWeatherData36Hours();
    weekWeatherData = await getWeatherDataWeek();
    // 資料載入，開始監測
    observer.observe(weatherObserver);
    // 更新畫面時間
    const now = new Date();
    timeRefresh.textContent = `更新時間：${now.getMonth()}/${now.getDate()} ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes()}:${now.getSeconds().toString().padStart(2, '0')}`;
}


window.addEventListener("DOMContentLoaded", () => {
    init();
});

iconRefresh.addEventListener("click", (e) => {
    e.preventDefault();
    init();
});