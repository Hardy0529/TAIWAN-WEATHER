import { getWeatherDataWeek, getWeatherData36Hours } from "./tool.js";
import { getWeatherSVG } from "./weather-svg.js"

let hoursWeatherData = null;
let weekWeatherData = null;

const unitWeatherOfPage = 3;
let weatherNum = 0;
let startIndex = 0;
let endIndex = 0;
let refreshFlag = false;
let locationLockFlag = false;
const weatherContainer = document.querySelector(".weather__render");
const weatherObserver = document.querySelector(".weather__render-observer");
const timeRefresh = document.querySelector(".weather__UpdateTime > span");
const iconRefresh = document.querySelector(".icon-arrows-cw");
// 設定監聽條件
const observerCallback = ([entry]) => {
    if (entry && entry.isIntersecting) {
        renderWeather();
    }
};
// 建立一個 intersection observer
const observer = new IntersectionObserver(observerCallback);


export function renderWeatherLocationLock(locationName) {
    locationLockFlag = true;
    weatherContainer.innerHTML = "";
    observer.observe(weatherObserver);
}

function renderWeather(locationName=null) {
    // 重新計算 startIndex 和 endIndex
    if(locationLockFlag) {
        if(!refreshFlag) {
            startIndex = hoursWeatherData.findIndex((element) => element.locationName == locationName);
            if(startIndex == -1) {
                endIndex = startIndex;
            } else {
                endIndex = startIndex + 1;
            }
        }
    } else {
        if(refreshFlag) {
            // 將 startIndex 設為 0，更新畫面目前已顯示資訊
            startIndex = 0;
        } else {
            startIndex = unitWeatherOfPage * weatherNum;
            endIndex = Math.min(hoursWeatherData.length, startIndex + unitWeatherOfPage);
        }
    }
    renderWeather36Hours(locationName);
    // 有鎖定縣市位置 or 畫面已顯示出全部資料，停止監控
    if(locationLockFlag || endIndex == hoursWeatherData.length) {
        observer.unobserve(weatherObserver);
    } 
    if(refreshFlag) {
        refreshFlag = false;
    } else {
        weatherNum++;
    }
}

function renderWeather36Hours(locationName=null) {
    for(let i = startIndex; i < endIndex; i++) {
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
    await loadData();
    // 資料載入，開始監測
    observer.observe(weatherObserver);
}

async function loadData() {
    hoursWeatherData = await getWeatherData36Hours();
    weekWeatherData = await getWeatherDataWeek();
    // 更新畫面時間
    const now = new Date();
    timeRefresh.textContent = `更新時間：${now.getMonth()}/${now.getDate()} ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes()}:${now.getSeconds().toString().padStart(2, '0')}`;
}


window.addEventListener("DOMContentLoaded", init);

iconRefresh.addEventListener("click", async (e) => {
    e.preventDefault();
    // 更新資料
    await loadData();
    
    refreshFlag = true;
    weatherContainer.innerHTML = "";
    observer.observe(weatherObserver);
});