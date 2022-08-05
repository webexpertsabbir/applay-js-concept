/* function isLeapYear(year){
    const remainder = year % 4;
    if(remainder == 0){
        return true;

    }
    else{
        return false;
    }
}
const isMyleapYear = isLeapYear(2024);
console.log(isMyleapYear); */

function leapYear(year){
    if((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)){
        console.log('Year is leap year');
    }
    else[
        console.log('Year not leap year')
    ]
}
leapYear(2022);