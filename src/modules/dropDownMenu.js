let dropDownMenuBar = document.querySelector(".weather__menu-bar");
let dropDownMenuBtn = document.querySelector(".weather__menu-bar-btn");
let dropDownMenuOptions = document.createElement("div");
let cities = ["臺北市", "新北市", "桃園市", "臺中市", "臺南市", "高雄市", "基隆市", "新竹市", "嘉義市", "新竹縣", "苗栗縣", "彰化縣", "南投縣", "雲林縣", "嘉義縣", "屏東縣", "宜蘭縣", "花蓮縣", "臺東縣", "澎湖縣", "金門縣", "連江縣"];

// only for test, need to delete before production
let close = document.querySelector("#close");

// when user clicks drop-down menu, render menu
dropDownMenuBar.addEventListener("click", (e) => {
    if (e.target == dropDownMenuBtn){
        renderOptions();
    }
})

// when user clicks close, remove menu
close.addEventListener("click", () => {
    removeOptions();
})

function renderOptions() {
    dropDownMenuOptions.classList.add("weather__menu-bar-options");
    dropDownMenuBar.appendChild(dropDownMenuOptions);
    if (dropDownMenuOptions.firstChild){
        return;
    } else {
        for(i = 0; i < cities.length; i++){
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