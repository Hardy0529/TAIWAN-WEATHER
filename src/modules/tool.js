const url = "https://opendata.cwb.gov.tw/api/v1/rest/datastore/";
const apikey = "CWB-A91E69B8-CE2E-4DDA-A1F5-A22448AA9D4C";


// js 將 css 載入
export function linkCss(cssName) {
    const head = document.querySelector("head");
    const link = document.createElement("link");
    link.rel = 'stylesheet'; 
    link.type = 'text/css';
    link.href = `./dist/css/${cssName}`;
    head.appendChild(link);
}


// 抓取氣象局API 資料
async function fetchWeatherData(dataid, locationName=null) {
    let fetchUrl = `${url}${dataid}?Authorization=${apikey}&format=JSON`;
    if(locationName) {
        fetchUrl += `&locationName=${locationName}`;
    }
    const fetchResponse = await fetch(fetchUrl);
    const weatherData = await fetchResponse.json();
    return weatherData;
}

// 鄉鎮天氣預報-未來1週天氣預報
// 撈取資料設定
const weekWeatherConfig = {
    PoP12h: true,              // 12小時降雨機率
    T: true,                   // 平均溫度
    RH: false,                 // 平均相對濕度
    MinCI: false,              // 最小舒適度指數
    WS: false,                 // 最大風速
    MaxAT: false,              // 最高體感溫度
    Wx: true,                  // 天氣現象
    MaxCI: false,              // 最大舒適度指數
    MinT: true,                // 最低溫度
    UVI: false,                // 紫外線指數
    WeatherDescription: false, // 天氣預報綜合描述
    MinAT: false,              // 最低體感溫度
    MaxT: true,                // 最高溫度
    WD: false,                 // 風向
    Td: false                  // 平均露點溫度
}
export async function getWeekWeatherData(locationName=null) {
    const weatherData = await fetchWeatherData("F-D0047-091", locationName);
    return classifyWeekWeatherData(weatherData);
}
function classifyWeekWeatherData(weatherData) {
    const returnData = [];

    const weatherLocationList = weatherData.records.locations[0].location;
    // 拆分各縣市
    for(let i = 0, dataLen = weatherLocationList.length; i < dataLen; i++) {
        let solvedData = {};

        const weatherLocationItem = weatherLocationList[i];
        const weatherElementList = weatherLocationItem.weatherElement;
        // 拆分天氣詳細資訊
        for(let j = 0, len = weatherElementList.length;  j < len; j++) {
            const weatherElementItem = weatherElementList[j];

            // skip 沒有要抓取的資料
            if(!weekWeatherConfig[`${weatherElementItem.elementName}`]) { continue; }

            // 拆分未來一週資訊
            let timeList = weatherElementItem.time;
            let timeLen = timeList.length;
            let timeItem = null;
            let weekInfo = [];
            let compareDate = null;
            for(let k = 0; k < timeLen, timeItem = timeList[k]; k++) {
                // 用 startTime 做區分，相同日期不再抓取
                const startTime = new Date(timeItem.startTime);
                if(!compareDate || compareDate.getDate() != startTime.getDate()) {
                    weekInfo.push(timeItem.elementValue[0].value.trim());
                    compareDate = startTime;
                }
            }
            solvedData[`${weatherElementItem.elementName}`] = weekInfo;
        }
        solvedData["locationName"] = weatherLocationItem.locationName;
        returnData.push(solvedData);
    }
    return returnData;
}

// 一般天氣預報-今明 36 小時天氣預報
// 撈取資料設定
const thirtySixthHoursWeatherConfig = {
    Wx: true,    // 天氣現象
    PoP: true,   // 降雨機率
    MinT: true,  // 最低溫度
    CI: false,   // 舒適度指數
    MaxT: true,  // 最高溫度
}
export async function get36HoursWeatherData(locationName=null) {
    const weatherData = await fetchWeatherData("F-C0032-001", locationName);
    return classify36HoursWeatherData(weatherData);
}
function classify36HoursWeatherData(weatherData) {
    const returnData = [];

    const weatherLocationList = weatherData.records.location;
    // 拆分各縣市
    for(let i = 0, dataLen = weatherLocationList.length; i < dataLen; i++) {
        let solvedData = {};

        const weatherLocationItem = weatherLocationList[i];
        const weatherElementList = weatherLocationItem.weatherElement;
        // 拆分天氣詳細資訊
        for(let j = 0, len = weatherElementList.length;  j < len; j++) {
            const weatherElementItem = weatherElementList[j];

            // skip 沒有要抓取的資料
            if(!thirtySixthHoursWeatherConfig[`${weatherElementItem.elementName}`]) { continue; }

            // 拆分未來一週資訊
            let timeList = weatherElementItem.time;
            let timeLen = timeList.length;
            let timeItem=null;
            let compareDate = null;
            let weekInfo = [];
            for(let k = 0; k < timeLen, timeItem = timeList[k]; k++) {
                // 用 startTime 做區分，相同日期不再抓取
                const startTime = new Date(timeItem.startTime);
                if(!compareDate || compareDate.getDate() != startTime.getDate()) {
                    weekInfo.push(timeItem.parameter.parameterName.trim());
                    compareDate = startTime;
                }
            }
            solvedData[`${weatherElementItem.elementName}`] = weekInfo;
        }
        solvedData["locationName"] = weatherLocationItem.locationName;
        returnData.push(solvedData);
    }
    return returnData;
}