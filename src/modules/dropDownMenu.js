import { renderWeatherLocationLock } from "./renderWeatherData";

let dropDownMenuBar = document.querySelector(".weather__menu-bar");
let dropDownMenuOptions = document.createElement("div");
let cities = ["臺北市", "新北市", "桃園市", "臺中市", "臺南市", "高雄市", "基隆市", "新竹市", "嘉義市", "新竹縣", "苗栗縣", "彰化縣", "南投縣", "雲林縣", "嘉義縣", "屏東縣", "宜蘭縣", "花蓮縣", "臺東縣", "澎湖縣", "金門縣", "連江縣"];


dropDownMenuBar.addEventListener("click", (e) => {
    let dropDownMenuIcon = document.querySelector("#weather__menu-bar-icon");
    if (e.target.className == "icon-down-open-big"){
        renderOptions();
        dropDownMenuIcon.classList.remove("icon-down-open-big");
        dropDownMenuIcon.classList.add("icon-up-open-big");
        return;
    }
    if (e.target.className == "icon-up-open-big"){
        removeOptions();
        dropDownMenuIcon.classList.remove("icon-up-open-big");
        dropDownMenuIcon.classList.add("icon-down-open-big");
        return;
    }
    if (e.target.className == "weather__menu-bar-option"){
        let cityName = e.target.value;
        let menuText = dropDownMenuBar.querySelector(".weather__menu-bar-text");
        removeOptions();
        menuText.innerHTML = cityName;
        dropDownMenuIcon.classList.remove("icon-up-open-big");
        dropDownMenuIcon.classList.add("icon-down-open-big");
        renderWeatherLocationLock(cityName);
        return;
    }
}, false)

function renderOptions() {
    dropDownMenuOptions.classList.add("weather__menu-bar-options");
    dropDownMenuBar.appendChild(dropDownMenuOptions);
    if (dropDownMenuOptions.firstChild){
        return;
    } else {
        for(let i = 0; i < cities.length; i++){
            let city = cities[i];
            let dropDownMenuOption = document.createElement("button");
            dropDownMenuOption.classList.add("weather__menu-bar-option");
            dropDownMenuOption.value = city;
            dropDownMenuOption.innerHTML = city;
            dropDownMenuOptions.appendChild(dropDownMenuOption);
        }
    }
}

function removeOptions() {
    if(dropDownMenuBar.lastChild == dropDownMenuOptions){
        dropDownMenuBar.removeChild(dropDownMenuBar.lastChild);
    }
}