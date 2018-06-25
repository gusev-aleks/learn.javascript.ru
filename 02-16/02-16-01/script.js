"use strict";
var browser = prompt("Какой у вас браузер?");
    if ( browser == "IE"){
        alert("О да! У вас IE!");
    }
    else if ( browser == "Chrome" || browser == "Firefox" || browser == "Safari" || browser == "Opera"){
        alert("Да,и эти браузеры мы поддерживаем");
    }
    else {
        alert("Мы надеемся, что и в вашем браузере все ок!");
    }
