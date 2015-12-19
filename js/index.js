$(function() {
  $(document).on("click", "#geo_html5", function() {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        // 処理に成功した場合
        var lat = position.coords.latitude,
            lng = position.coords.longitude,
            alt = position.coords.altitude,
            acc = position.coords.accuracy;
        setWebGeoLocation(lat, lng, acc);
      }, function(error) {
        // 処理に失敗した場合
        switch(error.code) {
          case 1:
            alert("位置情報が許可されていません。");
            break;
          case 2:
            alert("デバイスの位置がわかりません。");
            break;
          case 3:
            alert("アイムアウトしました。");
            break;
        }
      }, {
        enableHighAccuracy: true,
        timeout: 6000,
        maximumAge: 60000
      });
    }
  });

  $(document).on("click", "#geo_native", function() {
    // ネイティブに位置情報を問い合わせ
    document.location = "com.kato.geolocation://getLocation";
  });

});

function setWebGeoLocation(lat, lng, accuracy) {
  var elem = document.getElementById("webGeoLocationResult");
  elem.innerHTML = lat + ", " + lng + ", " + accuracy;
}

function setNativeGeoLocation(lat, lng, accuracy) {
  var elem = document.getElementById("nativeGeoLocationResult");
  elem.innerHTML = lat + ", " + lng + ", " + accuracy;
}
