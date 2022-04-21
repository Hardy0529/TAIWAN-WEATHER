/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_headerColorChange_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/headerColorChange.js */ \"./src/modules/headerColorChange.js\");\n/* harmony import */ var _modules_headerColorChange_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_headerColorChange_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_transformCloud_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/transformCloud.js */ \"./src/modules/transformCloud.js\");\n/* harmony import */ var _modules_transformCloud_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_transformCloud_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _modules_gps2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/gps2.js */ \"./src/modules/gps2.js\");\n/* harmony import */ var _modules_dropDownMenu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/dropDownMenu.js */ \"./src/modules/dropDownMenu.js\");\n/* harmony import */ var _modules_renderWeatherData_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/renderWeatherData.js */ \"./src/modules/renderWeatherData.js\");\n/* harmony import */ var _modules_tool_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tool.js */ \"./src/modules/tool.js\");\n// header color change\r\n\r\n\r\n// Transform Cloud\r\n\r\n\r\n// gps2\r\n\r\n\r\n// import GPS from \"./modules/GPS.js\";\r\n\r\n\r\n\r\n(0,_modules_tool_js__WEBPACK_IMPORTED_MODULE_5__.linkCss)(\"base.css\");\r\n(0,_modules_tool_js__WEBPACK_IMPORTED_MODULE_5__.linkCss)(\"layout.css\");\r\n(0,_modules_tool_js__WEBPACK_IMPORTED_MODULE_5__.linkCss)(\"component.css\");\r\n\n\n//# sourceURL=webpack://taiwanweather/./src/index.js?");

/***/ }),

/***/ "./src/modules/dropDownMenu.js":
/*!*************************************!*\
  !*** ./src/modules/dropDownMenu.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _renderWeatherData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderWeatherData */ \"./src/modules/renderWeatherData.js\");\n\r\n\r\nlet dropDownMenuBar = document.querySelector(\".weather__menu-bar\");\r\nlet dropDownMenuOptions = document.createElement(\"div\");\r\nlet cities = [\"全臺縣市\",\"臺北市\", \"新北市\", \"桃園市\", \"臺中市\", \"臺南市\", \"高雄市\", \"基隆市\", \"新竹市\", \"嘉義市\", \"新竹縣\", \"苗栗縣\", \"彰化縣\", \"南投縣\", \"雲林縣\", \"嘉義縣\", \"屏東縣\", \"宜蘭縣\", \"花蓮縣\", \"臺東縣\", \"澎湖縣\", \"金門縣\", \"連江縣\"];\r\n\r\n\r\ndropDownMenuBar.addEventListener(\"click\", (e) => {\r\n    let dropDownMenuIcon = document.querySelector(\"#weather__menu-bar-icon\");\r\n    if (e.target.className == \"icon-down-open-big\"){\r\n        renderOptions();\r\n        dropDownMenuIcon.classList.remove(\"icon-down-open-big\");\r\n        dropDownMenuIcon.classList.add(\"icon-up-open-big\");\r\n        return;\r\n    }\r\n    if (e.target.className == \"icon-up-open-big\"){\r\n        removeOptions();\r\n        dropDownMenuIcon.classList.remove(\"icon-up-open-big\");\r\n        dropDownMenuIcon.classList.add(\"icon-down-open-big\");\r\n        return;\r\n    }\r\n    if (e.target.className == \"weather__menu-bar-option\"){\r\n        let cityName = e.target.value;\r\n        let menuText = dropDownMenuBar.querySelector(\".weather__menu-bar-text\");\r\n        removeOptions();\r\n        menuText.innerHTML = cityName;\r\n        dropDownMenuIcon.classList.remove(\"icon-up-open-big\");\r\n        dropDownMenuIcon.classList.add(\"icon-down-open-big\");\r\n        (0,_renderWeatherData__WEBPACK_IMPORTED_MODULE_0__.renderWeatherLocationLock)(cityName);\r\n        return;\r\n    }\r\n}, false)\r\n\r\nfunction renderOptions() {\r\n    dropDownMenuOptions.classList.add(\"weather__menu-bar-options\");\r\n    dropDownMenuBar.appendChild(dropDownMenuOptions);\r\n    if (dropDownMenuOptions.firstChild){\r\n        return;\r\n    } else {\r\n        for(let i = 0; i < cities.length; i++){\r\n            let city = cities[i];\r\n            let dropDownMenuOption = document.createElement(\"button\");\r\n            dropDownMenuOption.classList.add(\"weather__menu-bar-option\");\r\n            dropDownMenuOption.value = city;\r\n            dropDownMenuOption.innerHTML = city;\r\n            dropDownMenuOptions.appendChild(dropDownMenuOption);\r\n        }\r\n    }\r\n}\r\n\r\nfunction removeOptions() {\r\n    if(dropDownMenuBar.lastChild == dropDownMenuOptions){\r\n        dropDownMenuBar.removeChild(dropDownMenuBar.lastChild);\r\n    }\r\n}\n\n//# sourceURL=webpack://taiwanweather/./src/modules/dropDownMenu.js?");

/***/ }),

/***/ "./src/modules/gps2.js":
/*!*****************************!*\
  !*** ./src/modules/gps2.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _renderWeatherData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderWeatherData */ \"./src/modules/renderWeatherData.js\");\n\r\n\r\nfunction init() {\r\n  //取得 經緯度\r\n  if (navigator.geolocation) {\r\n    //\r\n    navigator.geolocation.getCurrentPosition(showPosition); //有拿到位置就呼叫 showPosition 函式\r\n  } else {\r\n    m.innerHTML =\r\n      \"您的瀏覽器不支援 顯示地理位置 API ，請使用其它瀏覽器開啟 這個網址\";\r\n  }\r\n  function showPosition(position) {\r\n    let my_lat = position.coords.latitude;\r\n    let my_lon = position.coords.longitude;\r\n    let min_result = 9999;\r\n    let locationName = \"台北\";\r\n\r\n    fetch(\r\n      \"https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=CWB-EF46CCF9-7FB5-4120-AA40-CFDDA8BC249C\"\r\n    )\r\n      .then((response) => {\r\n        return response.json();\r\n      })\r\n      .then((data) => {\r\n        console.log(data);\r\n        let city = data[\"records\"][\"locations\"][0][\"location\"];\r\n        city.forEach((element) => {\r\n          let lat = element[\"lat\"];\r\n          let lon = element[\"lon\"];\r\n\r\n          let result =\r\n            ((my_lat - lat) * (my_lat - lat) +\r\n              (my_lon - lon) * (my_lon - lon)) **\r\n            0.5;\r\n\r\n          if (min_result > result) {\r\n            min_result = result;\r\n            locationName = element[\"locationName\"];\r\n          }\r\n        });\r\n        console.log(locationName);\r\n        (0,_renderWeatherData__WEBPACK_IMPORTED_MODULE_0__.renderWeatherLocationLock)(locationName);\r\n        return;\r\n      });\r\n  }\r\n}\r\n\r\ninit();\r\n\n\n//# sourceURL=webpack://taiwanweather/./src/modules/gps2.js?");

/***/ }),

/***/ "./src/modules/headerColorChange.js":
/*!******************************************!*\
  !*** ./src/modules/headerColorChange.js ***!
  \******************************************/
/***/ (() => {

eval("function init() {\r\n  // header color change\r\n  window.addEventListener(\"scroll\", () => {\r\n    const scrollTop = document.documentElement.scrollTop;\r\n    const jsHeader = document.querySelector(\".js-header\");\r\n    if (scrollTop > 55) {\r\n      jsHeader.classList.add(\"class\", \"header--colored\");\r\n    } else {\r\n      jsHeader.classList.remove(\"class\", \"header--colored\");\r\n    }\r\n  });\r\n}\r\n\r\ninit();\r\n\n\n//# sourceURL=webpack://taiwanweather/./src/modules/headerColorChange.js?");

/***/ }),

/***/ "./src/modules/renderWeatherData.js":
/*!******************************************!*\
  !*** ./src/modules/renderWeatherData.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderWeatherLocationLock\": () => (/* binding */ renderWeatherLocationLock)\n/* harmony export */ });\n/* harmony import */ var _tool_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tool.js */ \"./src/modules/tool.js\");\n/* harmony import */ var _weather_svg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weather-svg.js */ \"./src/modules/weather-svg.js\");\n/* harmony import */ var _weatherLoadingEffect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weatherLoadingEffect.js */ \"./src/modules/weatherLoadingEffect.js\");\n\r\n\r\n\r\n\r\nlet hoursWeatherData = null;\r\nlet weekWeatherData = null;\r\n\r\nconst unitWeatherOfPage = 3;\r\nlet weatherNum = 0;\r\nlet startIndex = 0;\r\nlet endIndex = 0;\r\nlet refreshFlag = false;\r\nconst locationLockInfo = {\r\n    flag: false,\r\n    locationName: \"\"\r\n};\r\nconst weatherContainer = document.querySelector(\".weather__render\");\r\nconst weatherObserver = document.querySelector(\".weather__render-observer\");\r\nconst timeRefresh = document.querySelector(\".weather__UpdateTime > span\");\r\nconst iconRefresh = document.querySelector(\".icon-arrows-cw\");\r\n// 設定監聽條件\r\nconst observerCallback = ([entry]) => {\r\n    if (entry && entry.isIntersecting) {\r\n        renderWeather();\r\n    }\r\n};\r\n// 建立一個 intersection observer\r\nconst observer = new IntersectionObserver(observerCallback);\r\n\r\n\r\nfunction renderWeatherLocationLock(locationName) {\r\n    locationLockInfo.flag = true;\r\n    locationLockInfo.locationName = locationName;\r\n    weatherContainer.innerHTML = \"\";\r\n    observer.observe(weatherObserver);\r\n}\r\n\r\nfunction renderWeather() {\r\n    // 重新計算 startIndex 和 endIndex\r\n    if(locationLockInfo.flag) {\r\n        if(!refreshFlag) {\r\n            startIndex = hoursWeatherData.findIndex((element) => element.locationName == locationLockInfo.locationName);\r\n            if(startIndex == -1) {\r\n                endIndex = startIndex;\r\n            } else {\r\n                endIndex = startIndex + 1;\r\n            }\r\n        }\r\n    } else {\r\n        if(refreshFlag) {\r\n            // 將 startIndex 設為 0，更新畫面目前已顯示資訊\r\n            startIndex = 0;\r\n        } else {\r\n            startIndex = unitWeatherOfPage * weatherNum;\r\n            endIndex = Math.min(hoursWeatherData.length, startIndex + unitWeatherOfPage);\r\n        }\r\n    }\r\n    renderWeather36Hours();\r\n    // 有鎖定縣市位置 or 畫面已顯示出全部資料，停止監控\r\n    if(locationLockInfo.flag || endIndex == hoursWeatherData.length) {\r\n        observer.unobserve(weatherObserver);\r\n    } \r\n    if(refreshFlag) {\r\n        refreshFlag = false;\r\n    } else {\r\n        weatherNum++;\r\n    }\r\n}\r\n\r\nfunction renderWeather36Hours() {\r\n    for(let i = startIndex; i < endIndex; i++) {\r\n        const weatherData=hoursWeatherData[i]\r\n        const label = document.createElement(\"label\");\r\n        label.classList.add(\"weather__itme\");\r\n        const input = document.createElement(\"input\");\r\n        input.classList.add(\"switch_weather\");\r\n        input.type = \"checkbox\";\r\n\r\n        // weekinfo\r\n        const weatherWeekWeather = document.createElement(\"div\");\r\n        weatherWeekWeather.classList.add(\"weather__weekWeather\");\r\n        renderWeatherWeek(weatherData.locationName, weatherWeekWeather);\r\n\r\n        const weatherInfoCountry = document.createElement(\"div\");\r\n        weatherInfoCountry.textContent = weatherData.locationName;\r\n        weatherInfoCountry.classList.add(\"weather__info-county\");\r\n        const weatherInfoTemperate = document.createElement(\"div\");\r\n        weatherInfoTemperate.textContent = `${weatherData.MaxT[0]}°C`;\r\n        weatherInfoTemperate.classList.add(\"weather__info-temperature\");\r\n        const weatherInfoMeteorological = document.createElement(\"div\");\r\n        weatherInfoMeteorological.textContent = weatherData.Wx[0];\r\n        weatherInfoMeteorological.classList.add(\"weather__info-meteorological\");\r\n        const weatherInfoContainer = document.createElement(\"div\");\r\n        weatherInfoContainer.appendChild(weatherInfoTemperate);\r\n        weatherInfoContainer.appendChild(weatherInfoMeteorological);\r\n        const weatherInfo = document.createElement(\"div\");\r\n        weatherInfo.classList.add(\"weather__info\");\r\n        weatherInfo.appendChild(weatherInfoCountry);\r\n        weatherInfo.appendChild(weatherInfoContainer);\r\n\r\n        const weatherChart = document.createElement(\"div\");\r\n        weatherChart.classList.add(\"weather__chart\");\r\n        for(let j = 0; j < weatherData.time.length; j++) {\r\n            const weatherDayWeather = document.createElement(\"div\");\r\n            weatherDayWeather.classList.add(\"weather__dayweather\");\r\n\r\n            const weatherChartTime = document.createElement(\"div\");\r\n            weatherChartTime.classList.add(\"weather__chart-time\");\r\n            const time = new Date(weatherData.time[j]);\r\n            weatherChartTime.textContent = `${time.getHours()} ${ (time.getHours() >= 12) ? \"PM\" : \"AM\" }`;\r\n            \r\n            const weatherDayWeatherIcon = document.createElement(\"div\");\r\n            weatherDayWeatherIcon.classList.add(\"weather__dayweather-icon\");\r\n            weatherDayWeatherIcon.appendChild((0,_weather_svg_js__WEBPACK_IMPORTED_MODULE_1__.getWeatherSVG)(weatherData.Wx2[j]));\r\n\r\n            const weatherChartTemperature = document.createElement(\"div\");\r\n            weatherChartTemperature.classList.add(\"weather__chart-temperature\");\r\n            const weatherChartTemperatureMax = document.createElement(\"div\");\r\n            const weatherChartTemperatureMin = document.createElement(\"div\");\r\n            weatherChartTemperatureMax.textContent = `${weatherData.MaxT[j]}°`;\r\n            weatherChartTemperatureMin.textContent = `${weatherData.MinT[j]}°`;\r\n            weatherChartTemperature.appendChild(weatherChartTemperatureMax);\r\n            weatherChartTemperature.appendChild(weatherChartTemperatureMin);\r\n            \r\n            weatherDayWeather.appendChild(weatherChartTime);\r\n            weatherDayWeather.appendChild(weatherDayWeatherIcon);\r\n            weatherDayWeather.appendChild(weatherChartTemperature);\r\n\r\n            weatherChart.appendChild(weatherDayWeather);\r\n        }\r\n\r\n        label.appendChild(input);\r\n        label.appendChild(weatherWeekWeather);\r\n        label.appendChild(weatherInfo);\r\n        label.appendChild(weatherChart);\r\n\r\n        weatherContainer.appendChild(label);\r\n    }\r\n}\r\n\r\nconst weekConfig = {\r\n    \"0\": \"SUN\",\r\n    \"1\": \"MON\",\r\n    \"2\": \"TUE\",\r\n    \"3\": \"WED\",\r\n    \"4\": \"THU\",\r\n    \"5\": \"FRI\",\r\n    \"6\": \"SAT\",\r\n}\r\n\r\nfunction renderWeatherWeek(locationName, container) {\r\n    const index = weekWeatherData.findIndex((element) => element.locationName == locationName);\r\n    const weatherData = weekWeatherData[index];\r\n    for(let i = 0; i < weatherData.time.length; i++) {\r\n        const weatherWeekItem = document.createElement(\"div\");\r\n        weatherWeekItem.classList.add(\"weather__weekWeather-item\");\r\n\r\n        const day = new Date(weatherData.time[i]).getDay();\r\n        const weatherWeekItemDay = document.createElement(\"h3\");\r\n        weatherWeekItemDay.textContent = weekConfig[day];\r\n        \r\n        weatherWeekItem.appendChild(weatherWeekItemDay);\r\n        weatherWeekItem.append((0,_weather_svg_js__WEBPACK_IMPORTED_MODULE_1__.getWeatherSVG)(weatherData.Wx2[i]));\r\n\r\n        container.appendChild(weatherWeekItem);\r\n    }\r\n}\r\n\r\nasync function init() {\r\n    (0,_weatherLoadingEffect_js__WEBPACK_IMPORTED_MODULE_2__.startDataLoading)(\"載入中\");\r\n    await loadData();\r\n    // 資料載入，開始監測\r\n    observer.observe(weatherObserver);\r\n}\r\n\r\nasync function loadData() {\r\n    hoursWeatherData = await (0,_tool_js__WEBPACK_IMPORTED_MODULE_0__.getWeatherData36Hours)();\r\n    weekWeatherData = await (0,_tool_js__WEBPACK_IMPORTED_MODULE_0__.getWeatherDataWeek)();\r\n    // 更新畫面時間\r\n    const now = new Date();\r\n    timeRefresh.textContent = `更新時間：${now.getMonth()}/${now.getDate()} ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes()}:${now.getSeconds().toString().padStart(2, '0')}`;\r\n\r\n    (0,_weatherLoadingEffect_js__WEBPACK_IMPORTED_MODULE_2__.stopDataLoading)();\r\n}\r\n\r\n\r\nwindow.addEventListener(\"DOMContentLoaded\", init);\r\n\r\niconRefresh.addEventListener(\"click\", async (e) => {\r\n    e.preventDefault();\r\n    (0,_weatherLoadingEffect_js__WEBPACK_IMPORTED_MODULE_2__.startDataLoading)(\"資料更新中\");\r\n    // 更新資料\r\n    await loadData();\r\n    \r\n    refreshFlag = true;\r\n    weatherContainer.innerHTML = \"\";\r\n    observer.observe(weatherObserver);\r\n});\n\n//# sourceURL=webpack://taiwanweather/./src/modules/renderWeatherData.js?");

/***/ }),

/***/ "./src/modules/tool.js":
/*!*****************************!*\
  !*** ./src/modules/tool.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getWeatherData36Hours\": () => (/* binding */ getWeatherData36Hours),\n/* harmony export */   \"getWeatherDataWeek\": () => (/* binding */ getWeatherDataWeek),\n/* harmony export */   \"linkCss\": () => (/* binding */ linkCss)\n/* harmony export */ });\nconst url = \"https://opendata.cwb.gov.tw/api/v1/rest/datastore/\";\r\nconst apikey = \"CWB-A91E69B8-CE2E-4DDA-A1F5-A22448AA9D4C\";\r\n\r\n\r\n// js 將 css 載入\r\nfunction linkCss(cssName) {\r\n    const head = document.querySelector(\"head\");\r\n    const link = document.createElement(\"link\");\r\n    link.rel = 'stylesheet'; \r\n    link.type = 'text/css';\r\n    link.href = `./dist/css/${cssName}`;\r\n    head.appendChild(link);\r\n}\r\n\r\n\r\n// 抓取氣象局API 資料\r\nasync function fetchWeatherData(dataid, locationName=null) {\r\n    let fetchUrl = `${url}${dataid}?Authorization=${apikey}&format=JSON`;\r\n    if(locationName) {\r\n        fetchUrl += `&locationName=${locationName}`;\r\n    }\r\n    const fetchResponse = await fetch(fetchUrl);\r\n    const weatherData = await fetchResponse.json();\r\n    return weatherData;\r\n}\r\n\r\n// 鄉鎮天氣預報-未來1週天氣預報\r\n// 撈取資料設定\r\nconst weatherConfigWeek = {\r\n    PoP12h: true,              // 12小時降雨機率\r\n    T: true,                   // 平均溫度\r\n    RH: false,                 // 平均相對濕度\r\n    MinCI: false,              // 最小舒適度指數\r\n    WS: false,                 // 最大風速\r\n    MaxAT: false,              // 最高體感溫度\r\n    Wx: true,                  // 天氣現象\r\n    MaxCI: false,              // 最大舒適度指數\r\n    MinT: true,                // 最低溫度\r\n    UVI: false,                // 紫外線指數\r\n    WeatherDescription: false, // 天氣預報綜合描述\r\n    MinAT: false,              // 最低體感溫度\r\n    MaxT: true,                // 最高溫度\r\n    WD: false,                 // 風向\r\n    Td: false                  // 平均露點溫度\r\n}\r\nconst unitOfDataWeek = 7;\r\nasync function getWeatherDataWeek(locationName=null) {\r\n    const weatherData = await fetchWeatherData(\"F-D0047-091\", locationName);\r\n    return classifyWeatherDataWeek(weatherData);\r\n}\r\nfunction classifyWeatherDataWeek(weatherData) {\r\n    const returnData = [];\r\n\r\n    const weatherLocationList = weatherData.records.locations[0].location;\r\n    // 拆分各縣市\r\n    let timeInfo = [];\r\n    for(let i = 0, dataLen = weatherLocationList.length; i < dataLen; i++) {\r\n        let solvedData = {};\r\n\r\n        const weatherLocationItem = weatherLocationList[i];\r\n        const weatherElementList = weatherLocationItem.weatherElement;\r\n        // 拆分天氣詳細資訊\r\n        for(let j = 0, len = weatherElementList.length;  j < len; j++) {\r\n            const weatherElementItem = weatherElementList[j];\r\n\r\n            // skip 沒有要抓取的資料\r\n            if(!weatherConfigWeek[`${weatherElementItem.elementName}`]) { continue; }\r\n\r\n            // 拆分未來一週資訊\r\n            let timeList = weatherElementItem.time;\r\n            let timeLen = timeList.length;\r\n            let timeItem = null;\r\n            let weekInfo = [];\r\n            let weekSecondInfo = [];\r\n            let compareDate = null;\r\n            for(let k = 0; k < timeLen, timeItem = timeList[k]; k++) {\r\n                // 用 startTime 做區分，相同日期不再抓取\r\n                const startTime = new Date(timeItem.startTime);\r\n                if(!compareDate || compareDate.getDate() != startTime.getDate()) {\r\n                    if(i == 0 && j == 0) {\r\n                        timeInfo.push(timeItem.startTime);\r\n                    }\r\n                    if(weatherElementItem.elementName == \"Wx\") {\r\n                        weekSecondInfo.push(timeItem.elementValue[1].value.trim());\r\n                    }\r\n                    weekInfo.push(timeItem.elementValue[0].value.trim());\r\n                    compareDate = startTime;\r\n                    // 超過設定筆數，不再抓取\r\n                    if(weekInfo.length >= unitOfDataWeek) { break; }\r\n                }\r\n            }\r\n            solvedData[`${weatherElementItem.elementName}`] = weekInfo;\r\n            if(weekSecondInfo.length > 0) {\r\n                solvedData[`${weatherElementItem.elementName}2`] = weekSecondInfo;\r\n            }\r\n        }\r\n        solvedData[\"time\"] = timeInfo;\r\n        solvedData[\"locationName\"] = weatherLocationItem.locationName;\r\n        returnData.push(solvedData);\r\n    }\r\n    return returnData;\r\n}\r\n\r\n// 一般天氣預報-今明 36 小時天氣預報\r\n// 撈取資料設定\r\nconst weatherConfig36Hours = {\r\n    Wx: true,    // 天氣現象\r\n    PoP: true,   // 降雨機率\r\n    MinT: true,  // 最低溫度\r\n    CI: false,   // 舒適度指數\r\n    MaxT: true,  // 最高溫度\r\n}\r\nconst unitOfData36Hours = 3;\r\nasync function getWeatherData36Hours(locationName=null) {\r\n    const weatherData = await fetchWeatherData(\"F-C0032-001\", locationName);\r\n    return classifyWeatherData36Hours(weatherData);\r\n}\r\nfunction classifyWeatherData36Hours(weatherData) {\r\n    const returnData = [];\r\n\r\n    const weatherLocationList = weatherData.records.location;\r\n    // 拆分各縣市\r\n    let timeInfo = [];\r\n    for(let i = 0, dataLen = weatherLocationList.length; i < dataLen; i++) {\r\n        let solvedData = {};\r\n\r\n        const weatherLocationItem = weatherLocationList[i];\r\n        const weatherElementList = weatherLocationItem.weatherElement;\r\n        // 拆分天氣詳細資訊\r\n        for(let j = 0, len = weatherElementList.length;  j < len; j++) {\r\n            const weatherElementItem = weatherElementList[j];\r\n\r\n            // skip 沒有要抓取的資料\r\n            if(!weatherConfig36Hours[`${weatherElementItem.elementName}`]) { continue; }\r\n\r\n            // 拆分未來一週資訊\r\n            let timeList = weatherElementItem.time;\r\n            let timeLen = timeList.length;\r\n            let timeItem=null;\r\n            let weekInfo = [];\r\n            let weekSecondInfo = [];\r\n            for(let k = 0; k < timeLen, timeItem = timeList[k]; k++) {\r\n                if(i == 0 && j == 0) {\r\n                    timeInfo.push(timeItem.startTime);\r\n                }\r\n                if(weatherElementItem.elementName == \"Wx\") {\r\n                    weekSecondInfo.push(timeItem.parameter.parameterValue);\r\n                }\r\n                weekInfo.push(timeItem.parameter.parameterName.trim());\r\n                // 超過設定筆數，不再抓取\r\n                if(weekInfo.length >= unitOfData36Hours) { break; }\r\n            }\r\n            solvedData[`${weatherElementItem.elementName}`] = weekInfo;\r\n            if(weekSecondInfo.length > 0) {\r\n                solvedData[`${weatherElementItem.elementName}2`] = weekSecondInfo;\r\n            }\r\n        }\r\n        solvedData[\"time\"] = timeInfo;\r\n        solvedData[\"locationName\"] = weatherLocationItem.locationName;\r\n        returnData.push(solvedData);\r\n    }\r\n    return returnData;\r\n}\r\n\n\n//# sourceURL=webpack://taiwanweather/./src/modules/tool.js?");

/***/ }),

/***/ "./src/modules/transformCloud.js":
/*!***************************************!*\
  !*** ./src/modules/transformCloud.js ***!
  \***************************************/
/***/ (() => {

eval("function init() {\r\n  //   alert(234);\r\n}\r\n\r\ninit();\r\n\n\n//# sourceURL=webpack://taiwanweather/./src/modules/transformCloud.js?");

/***/ }),

/***/ "./src/modules/weather-svg.js":
/*!************************************!*\
  !*** ./src/modules/weather-svg.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getWeatherSVG\": () => (/* binding */ getWeatherSVG)\n/* harmony export */ });\nfunction sunday() {\r\n    return `<svg viewbox=\"-50 -50 100 100\">\r\n        <circle class=\"sun\" cx=\"0\" cy=\"0\" r=\"22\"></circle>\r\n    </svg>`;\r\n}\r\n\r\nfunction sunCloudy() {\r\n    return `<svg viewbox=\"-50 -50 100 100\">\r\n        <circle class=\"sun\" cx=\"0\" cy=\"0\" r=\"22\"></circle>\r\n        <circle class=\"cloud\" cx=\"-30\" cy=\"30\" r=\"20\"></circle>\r\n        <circle class=\"cloud\" cx=\"-15\" cy=\"30\" r=\"20\"></circle>\r\n        <circle class=\"cloud\" cx=\"0\" cy=\"30\" r=\"20\"></circle>\r\n        <circle class=\"cloud\" cx=\"-25\" cy=\"10\" r=\"15\"></circle>\r\n        <circle class=\"cloud\" cx=\"-7\" cy=\"15\" r=\"15\"></circle>\r\n    </svg>`;\r\n}\r\n\r\nfunction cloudy() {\r\n    return `<svg viewbox=\"-63 -40 100 100\">\r\n        <circle class=\"cloud\" cx=\"-30\" cy=\"30\" r=\"20\"></circle>\r\n        <circle class=\"cloud\" cx=\"-15\" cy=\"30\" r=\"20\"></circle>\r\n        <circle class=\"cloud\" cx=\"0\" cy=\"30\" r=\"20\"></circle>\r\n        <circle class=\"cloud\" cx=\"-25\" cy=\"10\" r=\"15\"></circle>\r\n        <circle class=\"cloud\" cx=\"-7\" cy=\"15\" r=\"15\"></circle>\r\n    </svg>`;\r\n    var parser = new DOMParser();\r\n    var wrapper = parser.parseFromString(html, \"text/html\");\r\n    return wrapper;\r\n}\r\n\r\nfunction rainy() {\r\n    return `<svg viewbox=\"-63 -40 100 100\">\r\n        <line\r\n            class=\"rain\"\r\n            x1=\"-25\"\r\n            y1=\"15\"\r\n            x2=\"-25\"\r\n            y2=\"35\"\r\n        ></line>\r\n        <line\r\n            class=\"rain\"\r\n            x1=\"-14\"\r\n            y1=\"5\"\r\n            x2=\"-14\"\r\n            y2=\"25\"\r\n        ></line>\r\n        <line class=\"rain\" x1=\"-5\" y1=\"20\" x2=\"-5\" y2=\"45\"></line>\r\n        <circle class=\"cloud\" cx=\"-30\" cy=\"30\" r=\"20\"></circle>\r\n        <circle class=\"cloud\" cx=\"-15\" cy=\"30\" r=\"20\"></circle>\r\n        <circle class=\"cloud\" cx=\"0\" cy=\"30\" r=\"20\"></circle>\r\n        <circle class=\"cloud\" cx=\"-25\" cy=\"10\" r=\"15\"></circle>\r\n        <circle class=\"cloud\" cx=\"-7\" cy=\"15\" r=\"15\"></circle>\r\n    </svg>`;\r\n}\r\n\r\nfunction getWeatherSVG(value) {\r\n    let html = \"\";\r\n    if(value <= 1) {\r\n        html = sunday();\r\n    }\r\n    else if(value <= 3) {\r\n        html = sunCloudy();\r\n    }\r\n    else if(value <= 7) {\r\n        html = cloudy();\r\n    }\r\n    else if(value <= 22) {\r\n        html = rainy();\r\n    }\r\n    var parser = new DOMParser();\r\n    var wrapper = parser.parseFromString(html, \"text/html\");\r\n    return wrapper.querySelector(\"svg\");\r\n}\n\n//# sourceURL=webpack://taiwanweather/./src/modules/weather-svg.js?");

/***/ }),

/***/ "./src/modules/weatherLoadingEffect.js":
/*!*********************************************!*\
  !*** ./src/modules/weatherLoadingEffect.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"startDataLoading\": () => (/* binding */ startDataLoading),\n/* harmony export */   \"stopDataLoading\": () => (/* binding */ stopDataLoading)\n/* harmony export */ });\n/* harmony import */ var _tool_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tool.js */ \"./src/modules/tool.js\");\n\r\n\r\n(0,_tool_js__WEBPACK_IMPORTED_MODULE_0__.linkCss)(\"weatherLoadingEffect.css\");\r\n\r\nfunction startDataLoading(content) {\r\n    const container = document.createElement(\"div\");\r\n    container.classList.add(\"weather__loading\");\r\n    container.innerHTML = `<div class=\"weather__loading-bg\">\r\n        <div class=\"weather__loading-bg-circle\"></div>\r\n        <div class=\"weather__loading-bg-rect\"></div>\r\n    </div>\r\n    <div class=\"weather__loading-content\">\r\n        <p>${content}<p>\r\n        <div class=\"weather__loading-dot\">\r\n            <div></div>\r\n            <div></div>\r\n            <div></div>\r\n        </div>\r\n    </div>`;\r\n    document.body.appendChild(container);\r\n}\r\n\r\nfunction stopDataLoading() {\r\n    const container = document.querySelector(\".weather__loading\");\r\n    container.classList.add(\"weather__loading--close\");\r\n    setTimeout(() => {\r\n        document.body.removeChild(container);\r\n    }, 1000);\r\n}\n\n//# sourceURL=webpack://taiwanweather/./src/modules/weatherLoadingEffect.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;