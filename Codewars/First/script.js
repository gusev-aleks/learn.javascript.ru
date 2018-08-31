"use strict";
var num = prompt( "Введите число" , "0" );

function makeNegative ( num ) {
        if ( num > 0 && num !== 0 ){
            alert ( -1 * num);
        }
        else if (num < 0 || num == 0) {
            alert (num);
        }
        return;
}

makeNegative( num );






// return number >= 0 ? number :  -1 * number;
