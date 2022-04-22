import { renderWeatherLocationLock } from "./renderWeatherData";
import { stopDataLoading } from "./weatherLoadingEffect";

export function init() {
  //取得 經緯度
  if (navigator.geolocation) {
    //
    navigator.geolocation.getCurrentPosition(showPosition, error); //有拿到位置就呼叫 showPosition 函式
  } else {
    m.innerHTML =
      "您的瀏覽器不支援 顯示地理位置 API ，請使用其它瀏覽器開啟 這個網址";
  }
  function showPosition(position) {
    let my_lat = position.coords.latitude;
    let show_lat = my_lat.toString().slice(0, 10);
    let my_lon = position.coords.longitude;
    let show_lon = my_lon.toString().slice(0, 10);

    let min_result = 9999;
    let locationName = "台北";

    let geolocationIp = document.querySelector("#geolocationIp");
    geolocationIp.innerHTML = ` <div>
                                您的地理位置
                                </div>
                                <div>
                                <span class="phoneIp">
                                緯度:
                                </span>
                                ${show_lat}
                               </div>
                                <div>
                                  <span class="phoneIp">
                                  經度:
                                  </span>
                                  ${show_lon}
                                </div>
                               `;

    fetch(
      "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=CWB-EF46CCF9-7FB5-4120-AA40-CFDDA8BC249C"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        let city = data["records"]["locations"][0]["location"];
        city.forEach((element) => {
          let lat = element["lat"];
          let lon = element["lon"];

          let result =
            ((my_lat - lat) * (my_lat - lat) +
              (my_lon - lon) * (my_lon - lon)) **
            0.5;

          if (min_result > result) {
            min_result = result;
            locationName = element["locationName"];
          }
        });
        // console.log(locationName);
        renderWeatherLocationLock(locationName);
        stopDataLoading();
        return;
      });
  }

  function error() {
    stopDataLoading();
  }
}

// init();
