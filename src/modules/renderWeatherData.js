import { getWeekWeatherData, get36HoursWeatherData } from "./tool.js";
import { getWeatherSVG } from "./weather-svg.js"

let hoursWeatherData = null;
let weekWeatherData = null;

const weatherContainer = document.querySelector(".weather__render");
export async function init() {
    hoursWeatherData = await get36HoursWeatherData();
    weekWeatherData = await getWeekWeatherData();
    render36HoursWeather();
}

function render36HoursWeather() {
    for(let i = 0, weatherData=null; i < hoursWeatherData.length, weatherData=hoursWeatherData[i]; i++) {
        const label = document.createElement("label");
        label.classList.add("weather__itme");
        const input = document.createElement("input");
        input.classList.add("switch_weather");
        input.type = "checkbox";

        // weekinfo
        const weatherWeekWeather = document.createElement("div");
        weatherWeekWeather.classList.add("weather__weekWeather");
        renderWeekWeather(weatherData.locationName, weatherWeekWeather);

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
            weatherChartTime.textContent = `${time.getUTCHours()} ${ (time.getUTCHours() >= 12) ? "PM" : "AM" }`;
            
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
    "0": "MON",
    "1": "TUE",
    "2": "WED",
    "3": "THU",
    "4": "FRI",
    "5": "SAT",
    "6": "SUN",
}

function renderWeekWeather(locationName, container) {
    const index = weekWeatherData.findIndex((element) => element.locationName == locationName);
    const weatherData = weekWeatherData[index];
    for(let i = 0; i < weatherData.time.length; i++) {
        const weatherWeekItem = document.createElement("div");
        weatherWeekItem.classList.add("weather__weekWeather-item");

        const day = new Date(weatherData.time[i]).getUTCDay();
        const weatherWeekItemDay = document.createElement("h3");
        weatherWeekItemDay.textContent = weekConfig[day];
        
        weatherWeekItem.appendChild(weatherWeekItemDay);
        weatherWeekItem.append(getWeatherSVG(weatherData.Wx2[i]));

        container.appendChild(weatherWeekItem);
    }
}

init();