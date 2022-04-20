export {geoFindMe};
export const location = data[0].address_components[4].long_name;

function geoFindMe() {
    
    if (!navigator.geolocation){
        return;
    }
    navigator.geolocation.getCurrentPosition(success, error);
    
    function success(position) {
        let latitude  = position.coords.latitude;
        let longitude = position.coords.longitude;
        Url = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + latitude + "," + longitude + "&language=zh-TW&key=AIzaSyDQO5Pgj0_X8Uk8PMjyeVfp6KIcIO9g39U"
        
        fetch(Url)
        .then((response) => {
            return response.json(); 
        })
        .then((jsonData) => {
            let data = jsonData.results;
            const location = data[0].address_components[4].long_name;
            console.log(location);
            
            })
        .catch((err) => {
            console.log('錯誤:', err);
        });

    };
    
}