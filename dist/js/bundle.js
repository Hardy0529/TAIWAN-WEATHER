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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_headerColorChange_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/headerColorChange.js */ \"./src/modules/headerColorChange.js\");\n/* harmony import */ var _modules_headerColorChange_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_headerColorChange_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_transformCloud_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/transformCloud.js */ \"./src/modules/transformCloud.js\");\n/* harmony import */ var _modules_transformCloud_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_transformCloud_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _modules_gps2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/gps2.js */ \"./src/modules/gps2.js\");\n/* harmony import */ var _modules_gps2_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_gps2_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _modules_dropDownMenu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/dropDownMenu.js */ \"./src/modules/dropDownMenu.js\");\n/* harmony import */ var _modules_renderWeatherData_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/renderWeatherData.js */ \"./src/modules/renderWeatherData.js\");\n/* harmony import */ var _modules_tool_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tool.js */ \"./src/modules/tool.js\");\n// header color change\n\n\n// Transform Cloud\n\n\n// gps2\n\n\n// import GPS from \"./modules/GPS.js\";\n\n\n\n(0,_modules_tool_js__WEBPACK_IMPORTED_MODULE_5__.linkCss)(\"base.css\");\n(0,_modules_tool_js__WEBPACK_IMPORTED_MODULE_5__.linkCss)(\"layout.css\");\n(0,_modules_tool_js__WEBPACK_IMPORTED_MODULE_5__.linkCss)(\"component.css\");\n\n\n//# sourceURL=webpack://taiwanweather/./src/index.js?");

/***/ }),

/***/ "./src/modules/dropDownMenu.js":
/*!*************************************!*\
  !*** ./src/modules/dropDownMenu.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _renderWeatherData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderWeatherData */ \"./src/modules/renderWeatherData.js\");\n\n\nlet dropDownMenuBar = document.querySelector(\".weather__menu-bar\");\nlet dropDownMenuOptions = document.createElement(\"div\");\nlet cities = [\"全臺縣市\",\"臺北市\", \"新北市\", \"桃園市\", \"臺中市\", \"臺南市\", \"高雄市\", \"基隆市\", \"新竹市\", \"嘉義市\", \"新竹縣\", \"苗栗縣\", \"彰化縣\", \"南投縣\", \"雲林縣\", \"嘉義縣\", \"屏東縣\", \"宜蘭縣\", \"花蓮縣\", \"臺東縣\", \"澎湖縣\", \"金門縣\", \"連江縣\"];\n\n\ndropDownMenuBar.addEventListener(\"click\", (e) => {\n    let dropDownMenuIcon = document.querySelector(\"#weather__menu-bar-icon\");\n    if (e.target.className == \"icon-down-open-big\"){\n        renderOptions();\n        dropDownMenuIcon.classList.remove(\"icon-down-open-big\");\n        dropDownMenuIcon.classList.add(\"icon-up-open-big\");\n        return;\n    }\n    if (e.target.className == \"icon-up-open-big\"){\n        removeOptions();\n        dropDownMenuIcon.classList.remove(\"icon-up-open-big\");\n        dropDownMenuIcon.classList.add(\"icon-down-open-big\");\n        return;\n    }\n    if (e.target.className == \"weather__menu-bar-option\"){\n        let cityName = e.target.value;\n        let menuText = dropDownMenuBar.querySelector(\".weather__menu-bar-text\");\n        removeOptions();\n        menuText.innerHTML = cityName;\n        dropDownMenuIcon.classList.remove(\"icon-up-open-big\");\n        dropDownMenuIcon.classList.add(\"icon-down-open-big\");\n        (0,_renderWeatherData__WEBPACK_IMPORTED_MODULE_0__.renderWeatherLocationLock)(cityName);\n        return;\n    }\n}, false)\n\nfunction renderOptions() {\n    dropDownMenuOptions.classList.add(\"weather__menu-bar-options\");\n    dropDownMenuBar.appendChild(dropDownMenuOptions);\n    if (dropDownMenuOptions.firstChild){\n        return;\n    } else {\n        for(let i = 0; i < cities.length; i++){\n            let city = cities[i];\n            let dropDownMenuOption = document.createElement(\"button\");\n            dropDownMenuOption.classList.add(\"weather__menu-bar-option\");\n            dropDownMenuOption.value = city;\n            dropDownMenuOption.innerHTML = city;\n            dropDownMenuOptions.appendChild(dropDownMenuOption);\n        }\n    }\n}\n\nfunction removeOptions() {\n    if(dropDownMenuBar.lastChild == dropDownMenuOptions){\n        dropDownMenuBar.removeChild(dropDownMenuBar.lastChild);\n    }\n}\n\n//# sourceURL=webpack://taiwanweather/./src/modules/dropDownMenu.js?");

/***/ }),

/***/ "./src/modules/gps2.js":
/*!*****************************!*\
  !*** ./src/modules/gps2.js ***!
  \*****************************/
/***/ (() => {

eval("function init() {\n  //取得 經緯度\n  if (navigator.geolocation) {\n    //\n    navigator.geolocation.getCurrentPosition(showPosition); //有拿到位置就呼叫 showPosition 函式\n  } else {\n    m.innerHTML =\n      \"您的瀏覽器不支援 顯示地理位置 API ，請使用其它瀏覽器開啟 這個網址\";\n  }\n  function showPosition(position) {\n    let my_lat = position.coords.latitude;\n    let my_lon = position.coords.longitude;\n    let min_result = 9999;\n    let result_name = \"台北\";\n\n    fetch(\n      \"https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=CWB-EF46CCF9-7FB5-4120-AA40-CFDDA8BC249C\"\n    )\n      .then((response) => {\n        return response.json();\n      })\n      .then((data) => {\n        console.log(data);\n        let city = data[\"records\"][\"locations\"][0][\"location\"];\n        city.forEach((element) => {\n          let lat = element[\"lat\"];\n          let lon = element[\"lon\"];\n\n          let result =\n            ((my_lat - lat) * (my_lat - lat) +\n              (my_lon - lon) * (my_lon - lon)) **\n            0.5;\n\n          if (min_result > result) {\n            min_result = result;\n            result_name = element[\"locationName\"];\n          }\n        });\n        console.log(result_name);\n      });\n  }\n}\n\ninit();\n\n\n//# sourceURL=webpack://taiwanweather/./src/modules/gps2.js?");

/***/ }),

/***/ "./src/modules/headerColorChange.js":
/*!******************************************!*\
  !*** ./src/modules/headerColorChange.js ***!
  \******************************************/
/***/ (() => {

eval("function init() {\n  // header color change\n  window.addEventListener(\"scroll\", () => {\n    const scrollTop = document.documentElement.scrollTop;\n    const jsHeader = document.querySelector(\".js-header\");\n    if (scrollTop > 55) {\n      jsHeader.classList.add(\"class\", \"header--colored\");\n    } else {\n      jsHeader.classList.remove(\"class\", \"header--colored\");\n    }\n  });\n}\n\ninit();\n\n\n//# sourceURL=webpack://taiwanweather/./src/modules/headerColorChange.js?");

/***/ }),

/***/ "./src/modules/renderWeatherData.js":
/*!******************************************!*\
  !*** ./src/modules/renderWeatherData.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderWeatherLocationLock\": () => (/* binding */ renderWeatherLocationLock)\n/* harmony export */ });\n/* harmony import */ var _tool_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tool.js */ \"./src/modules/tool.js\");\n/* harmony import */ var _weather_svg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weather-svg.js */ \"./src/modules/weather-svg.js\");\n/* harmony import */ var _weatherLoadingEffect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weatherLoadingEffect.js */ \"./src/modules/weatherLoadingEffect.js\");\n\n\n\n\nlet hoursWeatherData = null;\nlet weekWeatherData = null;\n\nconst unitWeatherOfPage = 3;\nlet weatherNum = 0;\nlet startIndex = 0;\nlet endIndex = 0;\nlet refreshFlag = false;\nconst locationLockInfo = {\n    flag: false,\n    locationName: \"\"\n};\nconst weatherContainer = document.querySelector(\".weather__render\");\nconst weatherObserver = document.querySelector(\".weather__render-observer\");\nconst timeRefresh = document.querySelector(\".weather__UpdateTime > span\");\nconst iconRefresh = document.querySelector(\".icon-arrows-cw\");\n// 設定監聽條件\nconst observerCallback = ([entry]) => {\n    if (entry && entry.isIntersecting) {\n        renderWeather();\n    }\n};\n// 建立一個 intersection observer\nconst observer = new IntersectionObserver(observerCallback);\n\n\nfunction renderWeatherLocationLock(locationName) {\n    locationLockInfo.flag = true;\n    locationLockInfo.locationName = locationName;\n    weatherContainer.innerHTML = \"\";\n    observer.observe(weatherObserver);\n}\n\nfunction renderWeather() {\n    // 重新計算 startIndex 和 endIndex\n    if(locationLockInfo.flag) {\n        if(!refreshFlag) {\n            startIndex = hoursWeatherData.findIndex((element) => element.locationName == locationLockInfo.locationName);\n            if(startIndex == -1) {\n                endIndex = startIndex;\n            } else {\n                endIndex = startIndex + 1;\n            }\n        }\n    } else {\n        if(refreshFlag) {\n            // 將 startIndex 設為 0，更新畫面目前已顯示資訊\n            startIndex = 0;\n        } else {\n            startIndex = unitWeatherOfPage * weatherNum;\n            endIndex = Math.min(hoursWeatherData.length, startIndex + unitWeatherOfPage);\n        }\n    }\n    renderWeather36Hours();\n    // 有鎖定縣市位置 or 畫面已顯示出全部資料，停止監控\n    if(locationLockInfo.flag || endIndex == hoursWeatherData.length) {\n        observer.unobserve(weatherObserver);\n    } \n    if(refreshFlag) {\n        refreshFlag = false;\n    } else {\n        weatherNum++;\n    }\n}\n\nfunction renderWeather36Hours() {\n    for(let i = startIndex; i < endIndex; i++) {\n        const weatherData=hoursWeatherData[i]\n        const label = document.createElement(\"label\");\n        label.classList.add(\"weather__itme\");\n        const input = document.createElement(\"input\");\n        input.classList.add(\"switch_weather\");\n        input.type = \"checkbox\";\n\n        // weekinfo\n        const weatherWeekWeather = document.createElement(\"div\");\n        weatherWeekWeather.classList.add(\"weather__weekWeather\");\n        renderWeatherWeek(weatherData.locationName, weatherWeekWeather);\n\n        const weatherInfoCountry = document.createElement(\"div\");\n        weatherInfoCountry.textContent = weatherData.locationName;\n        weatherInfoCountry.classList.add(\"weather__info-county\");\n        const weatherInfoTemperate = document.createElement(\"div\");\n        weatherInfoTemperate.textContent = `${weatherData.MaxT[0]}°C`;\n        weatherInfoTemperate.classList.add(\"weather__info-temperature\");\n        const weatherInfoMeteorological = document.createElement(\"div\");\n        weatherInfoMeteorological.textContent = weatherData.Wx[0];\n        weatherInfoMeteorological.classList.add(\"weather__info-meteorological\");\n        const weatherInfoContainer = document.createElement(\"div\");\n        weatherInfoContainer.appendChild(weatherInfoTemperate);\n        weatherInfoContainer.appendChild(weatherInfoMeteorological);\n        const weatherInfo = document.createElement(\"div\");\n        weatherInfo.classList.add(\"weather__info\");\n        weatherInfo.appendChild(weatherInfoCountry);\n        weatherInfo.appendChild(weatherInfoContainer);\n\n        const weatherChart = document.createElement(\"div\");\n        weatherChart.classList.add(\"weather__chart\");\n        for(let j = 0; j < weatherData.time.length; j++) {\n            const weatherDayWeather = document.createElement(\"div\");\n            weatherDayWeather.classList.add(\"weather__dayweather\");\n\n            const weatherChartTime = document.createElement(\"div\");\n            weatherChartTime.classList.add(\"weather__chart-time\");\n            const time = new Date(weatherData.time[j]);\n            weatherChartTime.textContent = `${time.getHours()} ${ (time.getHours() >= 12) ? \"PM\" : \"AM\" }`;\n            \n            const weatherDayWeatherIcon = document.createElement(\"div\");\n            weatherDayWeatherIcon.classList.add(\"weather__dayweather-icon\");\n            weatherDayWeatherIcon.appendChild((0,_weather_svg_js__WEBPACK_IMPORTED_MODULE_1__.getWeatherSVG)(weatherData.Wx2[j]));\n\n            const weatherChartTemperature = document.createElement(\"div\");\n            weatherChartTemperature.classList.add(\"weather__chart-temperature\");\n            const weatherChartTemperatureMax = document.createElement(\"div\");\n            const weatherChartTemperatureMin = document.createElement(\"div\");\n            weatherChartTemperatureMax.textContent = `${weatherData.MaxT[j]}°`;\n            weatherChartTemperatureMin.textContent = `${weatherData.MinT[j]}°`;\n            weatherChartTemperature.appendChild(weatherChartTemperatureMax);\n            weatherChartTemperature.appendChild(weatherChartTemperatureMin);\n            \n            weatherDayWeather.appendChild(weatherChartTime);\n            weatherDayWeather.appendChild(weatherDayWeatherIcon);\n            weatherDayWeather.appendChild(weatherChartTemperature);\n\n            weatherChart.appendChild(weatherDayWeather);\n        }\n\n        label.appendChild(input);\n        label.appendChild(weatherWeekWeather);\n        label.appendChild(weatherInfo);\n        label.appendChild(weatherChart);\n\n        weatherContainer.appendChild(label);\n    }\n}\n\nconst weekConfig = {\n    \"0\": \"SUN\",\n    \"1\": \"MON\",\n    \"2\": \"TUE\",\n    \"3\": \"WED\",\n    \"4\": \"THU\",\n    \"5\": \"FRI\",\n    \"6\": \"SAT\",\n}\n\nfunction renderWeatherWeek(locationName, container) {\n    const index = weekWeatherData.findIndex((element) => element.locationName == locationName);\n    const weatherData = weekWeatherData[index];\n    for(let i = 0; i < weatherData.time.length; i++) {\n        const weatherWeekItem = document.createElement(\"div\");\n        weatherWeekItem.classList.add(\"weather__weekWeather-item\");\n\n        const day = new Date(weatherData.time[i]).getDay();\n        const weatherWeekItemDay = document.createElement(\"h3\");\n        weatherWeekItemDay.textContent = weekConfig[day];\n        \n        weatherWeekItem.appendChild(weatherWeekItemDay);\n        weatherWeekItem.append((0,_weather_svg_js__WEBPACK_IMPORTED_MODULE_1__.getWeatherSVG)(weatherData.Wx2[i]));\n\n        container.appendChild(weatherWeekItem);\n    }\n}\n\nasync function init() {\n    (0,_weatherLoadingEffect_js__WEBPACK_IMPORTED_MODULE_2__.startDataLoading)(\"載入中\");\n    await loadData();\n    // 資料載入，開始監測\n    observer.observe(weatherObserver);\n}\n\nasync function loadData() {\n    hoursWeatherData = await (0,_tool_js__WEBPACK_IMPORTED_MODULE_0__.getWeatherData36Hours)();\n    weekWeatherData = await (0,_tool_js__WEBPACK_IMPORTED_MODULE_0__.getWeatherDataWeek)();\n    // 更新畫面時間\n    const now = new Date();\n    timeRefresh.textContent = `更新時間：${now.getMonth()}/${now.getDate()} ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes()}:${now.getSeconds().toString().padStart(2, '0')}`;\n\n    (0,_weatherLoadingEffect_js__WEBPACK_IMPORTED_MODULE_2__.stopDataLoading)();\n}\n\n\nwindow.addEventListener(\"DOMContentLoaded\", init);\n\niconRefresh.addEventListener(\"click\", async (e) => {\n    e.preventDefault();\n    (0,_weatherLoadingEffect_js__WEBPACK_IMPORTED_MODULE_2__.startDataLoading)(\"資料更新中\");\n    // 更新資料\n    await loadData();\n    \n    refreshFlag = true;\n    weatherContainer.innerHTML = \"\";\n    observer.observe(weatherObserver);\n});\n\n//# sourceURL=webpack://taiwanweather/./src/modules/renderWeatherData.js?");

/***/ }),

/***/ "./src/modules/tool.js":
/*!*****************************!*\
  !*** ./src/modules/tool.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getWeatherData36Hours\": () => (/* binding */ getWeatherData36Hours),\n/* harmony export */   \"getWeatherDataWeek\": () => (/* binding */ getWeatherDataWeek),\n/* harmony export */   \"linkCss\": () => (/* binding */ linkCss)\n/* harmony export */ });\nconst url = \"https://opendata.cwb.gov.tw/api/v1/rest/datastore/\";\nconst apikey = \"CWB-A91E69B8-CE2E-4DDA-A1F5-A22448AA9D4C\";\n\n\n// js 將 css 載入\nfunction linkCss(cssName) {\n    const head = document.querySelector(\"head\");\n    const link = document.createElement(\"link\");\n    link.rel = 'stylesheet'; \n    link.type = 'text/css';\n    link.href = `./dist/css/${cssName}`;\n    head.appendChild(link);\n}\n\n\n// 抓取氣象局API 資料\nasync function fetchWeatherData(dataid, locationName=null) {\n    let fetchUrl = `${url}${dataid}?Authorization=${apikey}&format=JSON`;\n    if(locationName) {\n        fetchUrl += `&locationName=${locationName}`;\n    }\n    const fetchResponse = await fetch(fetchUrl);\n    const weatherData = await fetchResponse.json();\n    return weatherData;\n}\n\n// 鄉鎮天氣預報-未來1週天氣預報\n// 撈取資料設定\nconst weatherConfigWeek = {\n    PoP12h: true,              // 12小時降雨機率\n    T: true,                   // 平均溫度\n    RH: false,                 // 平均相對濕度\n    MinCI: false,              // 最小舒適度指數\n    WS: false,                 // 最大風速\n    MaxAT: false,              // 最高體感溫度\n    Wx: true,                  // 天氣現象\n    MaxCI: false,              // 最大舒適度指數\n    MinT: true,                // 最低溫度\n    UVI: false,                // 紫外線指數\n    WeatherDescription: false, // 天氣預報綜合描述\n    MinAT: false,              // 最低體感溫度\n    MaxT: true,                // 最高溫度\n    WD: false,                 // 風向\n    Td: false                  // 平均露點溫度\n}\nconst unitOfDataWeek = 7;\nasync function getWeatherDataWeek(locationName=null) {\n    const weatherData = await fetchWeatherData(\"F-D0047-091\", locationName);\n    return classifyWeatherDataWeek(weatherData);\n}\nfunction classifyWeatherDataWeek(weatherData) {\n    const returnData = [];\n\n    const weatherLocationList = weatherData.records.locations[0].location;\n    // 拆分各縣市\n    let timeInfo = [];\n    for(let i = 0, dataLen = weatherLocationList.length; i < dataLen; i++) {\n        let solvedData = {};\n\n        const weatherLocationItem = weatherLocationList[i];\n        const weatherElementList = weatherLocationItem.weatherElement;\n        // 拆分天氣詳細資訊\n        for(let j = 0, len = weatherElementList.length;  j < len; j++) {\n            const weatherElementItem = weatherElementList[j];\n\n            // skip 沒有要抓取的資料\n            if(!weatherConfigWeek[`${weatherElementItem.elementName}`]) { continue; }\n\n            // 拆分未來一週資訊\n            let timeList = weatherElementItem.time;\n            let timeLen = timeList.length;\n            let timeItem = null;\n            let weekInfo = [];\n            let weekSecondInfo = [];\n            let compareDate = null;\n            for(let k = 0; k < timeLen, timeItem = timeList[k]; k++) {\n                // 用 startTime 做區分，相同日期不再抓取\n                const startTime = new Date(timeItem.startTime);\n                if(!compareDate || compareDate.getDate() != startTime.getDate()) {\n                    if(i == 0 && j == 0) {\n                        timeInfo.push(timeItem.startTime);\n                    }\n                    if(weatherElementItem.elementName == \"Wx\") {\n                        weekSecondInfo.push(timeItem.elementValue[1].value.trim());\n                    }\n                    weekInfo.push(timeItem.elementValue[0].value.trim());\n                    compareDate = startTime;\n                    // 超過設定筆數，不再抓取\n                    if(weekInfo.length >= unitOfDataWeek) { break; }\n                }\n            }\n            solvedData[`${weatherElementItem.elementName}`] = weekInfo;\n            if(weekSecondInfo.length > 0) {\n                solvedData[`${weatherElementItem.elementName}2`] = weekSecondInfo;\n            }\n        }\n        solvedData[\"time\"] = timeInfo;\n        solvedData[\"locationName\"] = weatherLocationItem.locationName;\n        returnData.push(solvedData);\n    }\n    return returnData;\n}\n\n// 一般天氣預報-今明 36 小時天氣預報\n// 撈取資料設定\nconst weatherConfig36Hours = {\n    Wx: true,    // 天氣現象\n    PoP: true,   // 降雨機率\n    MinT: true,  // 最低溫度\n    CI: false,   // 舒適度指數\n    MaxT: true,  // 最高溫度\n}\nconst unitOfData36Hours = 3;\nasync function getWeatherData36Hours(locationName=null) {\n    const weatherData = await fetchWeatherData(\"F-C0032-001\", locationName);\n    return classifyWeatherData36Hours(weatherData);\n}\nfunction classifyWeatherData36Hours(weatherData) {\n    const returnData = [];\n\n    const weatherLocationList = weatherData.records.location;\n    // 拆分各縣市\n    let timeInfo = [];\n    for(let i = 0, dataLen = weatherLocationList.length; i < dataLen; i++) {\n        let solvedData = {};\n\n        const weatherLocationItem = weatherLocationList[i];\n        const weatherElementList = weatherLocationItem.weatherElement;\n        // 拆分天氣詳細資訊\n        for(let j = 0, len = weatherElementList.length;  j < len; j++) {\n            const weatherElementItem = weatherElementList[j];\n\n            // skip 沒有要抓取的資料\n            if(!weatherConfig36Hours[`${weatherElementItem.elementName}`]) { continue; }\n\n            // 拆分未來一週資訊\n            let timeList = weatherElementItem.time;\n            let timeLen = timeList.length;\n            let timeItem=null;\n            let weekInfo = [];\n            let weekSecondInfo = [];\n            for(let k = 0; k < timeLen, timeItem = timeList[k]; k++) {\n                if(i == 0 && j == 0) {\n                    timeInfo.push(timeItem.startTime);\n                }\n                if(weatherElementItem.elementName == \"Wx\") {\n                    weekSecondInfo.push(timeItem.parameter.parameterValue);\n                }\n                weekInfo.push(timeItem.parameter.parameterName.trim());\n                // 超過設定筆數，不再抓取\n                if(weekInfo.length >= unitOfData36Hours) { break; }\n            }\n            solvedData[`${weatherElementItem.elementName}`] = weekInfo;\n            if(weekSecondInfo.length > 0) {\n                solvedData[`${weatherElementItem.elementName}2`] = weekSecondInfo;\n            }\n        }\n        solvedData[\"time\"] = timeInfo;\n        solvedData[\"locationName\"] = weatherLocationItem.locationName;\n        returnData.push(solvedData);\n    }\n    return returnData;\n}\n\n\n//# sourceURL=webpack://taiwanweather/./src/modules/tool.js?");

/***/ }),

/***/ "./src/modules/transformCloud.js":
/*!***************************************!*\
  !*** ./src/modules/transformCloud.js ***!
  \***************************************/
/***/ (() => {

eval("function init() {\n  //   alert(234);\n}\n\ninit();\n\n\n//# sourceURL=webpack://taiwanweather/./src/modules/transformCloud.js?");

/***/ }),

/***/ "./src/modules/weather-svg.js":
/*!************************************!*\
  !*** ./src/modules/weather-svg.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getWeatherSVG\": () => (/* binding */ getWeatherSVG)\n/* harmony export */ });\nfunction sunday() {\n    return `<svg viewbox=\"-50 -50 100 100\">\n        <circle class=\"sun\" cx=\"0\" cy=\"0\" r=\"22\"></circle>\n    </svg>`;\n}\n\nfunction sunCloudy() {\n    return `<svg viewbox=\"-50 -50 100 100\">\n        <circle class=\"sun\" cx=\"0\" cy=\"0\" r=\"22\"></circle>\n        <circle class=\"cloud\" cx=\"-30\" cy=\"30\" r=\"20\"></circle>\n        <circle class=\"cloud\" cx=\"-15\" cy=\"30\" r=\"20\"></circle>\n        <circle class=\"cloud\" cx=\"0\" cy=\"30\" r=\"20\"></circle>\n        <circle class=\"cloud\" cx=\"-25\" cy=\"10\" r=\"15\"></circle>\n        <circle class=\"cloud\" cx=\"-7\" cy=\"15\" r=\"15\"></circle>\n    </svg>`;\n}\n\nfunction cloudy() {\n    return `<svg viewbox=\"-63 -40 100 100\">\n        <circle class=\"cloud\" cx=\"-30\" cy=\"30\" r=\"20\"></circle>\n        <circle class=\"cloud\" cx=\"-15\" cy=\"30\" r=\"20\"></circle>\n        <circle class=\"cloud\" cx=\"0\" cy=\"30\" r=\"20\"></circle>\n        <circle class=\"cloud\" cx=\"-25\" cy=\"10\" r=\"15\"></circle>\n        <circle class=\"cloud\" cx=\"-7\" cy=\"15\" r=\"15\"></circle>\n    </svg>`;\n    var parser = new DOMParser();\n    var wrapper = parser.parseFromString(html, \"text/html\");\n    return wrapper;\n}\n\nfunction rainy() {\n    return `<svg viewbox=\"-63 -40 100 100\">\n        <line\n            class=\"rain\"\n            x1=\"-25\"\n            y1=\"15\"\n            x2=\"-25\"\n            y2=\"35\"\n        ></line>\n        <line\n            class=\"rain\"\n            x1=\"-14\"\n            y1=\"5\"\n            x2=\"-14\"\n            y2=\"25\"\n        ></line>\n        <line class=\"rain\" x1=\"-5\" y1=\"20\" x2=\"-5\" y2=\"45\"></line>\n        <circle class=\"cloud\" cx=\"-30\" cy=\"30\" r=\"20\"></circle>\n        <circle class=\"cloud\" cx=\"-15\" cy=\"30\" r=\"20\"></circle>\n        <circle class=\"cloud\" cx=\"0\" cy=\"30\" r=\"20\"></circle>\n        <circle class=\"cloud\" cx=\"-25\" cy=\"10\" r=\"15\"></circle>\n        <circle class=\"cloud\" cx=\"-7\" cy=\"15\" r=\"15\"></circle>\n    </svg>`;\n}\n\nfunction getWeatherSVG(value) {\n    let html = \"\";\n    if(value <= 1) {\n        html = sunday();\n    }\n    else if(value <= 3) {\n        html = sunCloudy();\n    }\n    else if(value <= 7) {\n        html = cloudy();\n    }\n    else if(value <= 22) {\n        html = rainy();\n    }\n    var parser = new DOMParser();\n    var wrapper = parser.parseFromString(html, \"text/html\");\n    return wrapper.querySelector(\"svg\");\n}\n\n//# sourceURL=webpack://taiwanweather/./src/modules/weather-svg.js?");

/***/ }),

/***/ "./src/modules/weatherLoadingEffect.js":
/*!*********************************************!*\
  !*** ./src/modules/weatherLoadingEffect.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"startDataLoading\": () => (/* binding */ startDataLoading),\n/* harmony export */   \"stopDataLoading\": () => (/* binding */ stopDataLoading)\n/* harmony export */ });\n/* harmony import */ var _tool_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tool.js */ \"./src/modules/tool.js\");\n\n\n(0,_tool_js__WEBPACK_IMPORTED_MODULE_0__.linkCss)(\"weatherLoadingEffect.css\");\n\nfunction startDataLoading(content) {\n    const container = document.createElement(\"div\");\n    container.classList.add(\"weather__loading\");\n    container.innerHTML = `<div class=\"weather__loading-bg\">\n        <div class=\"weather__loading-bg-circle\"></div>\n        <div class=\"weather__loading-bg-rect\"></div>\n    </div>\n    <div class=\"weather__loading-content\">\n        <p>${content}<p>\n        <div class=\"weather__loading-dot\">\n            <div></div>\n            <div></div>\n            <div></div>\n        </div>\n    </div>`;\n    document.body.appendChild(container);\n}\n\nfunction stopDataLoading() {\n    const container = document.querySelector(\".weather__loading\");\n    container.classList.add(\"weather__loading--close\");\n    setTimeout(() => {\n        document.body.removeChild(container);\n    }, 1000);\n}\n\n//# sourceURL=webpack://taiwanweather/./src/modules/weatherLoadingEffect.js?");

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