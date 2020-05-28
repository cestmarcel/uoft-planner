// Logging current date in header
document.getElementById("header-date").textContent = moment().format("MMM DD, YYYY");

// Log current hour
let currentHour = moment().format("H");
let currentHourUS = moment().format("h");
let amPm = currentHour > 11 ? "pm" : "am";
let timeslots = document.getElementsByClassName("event");
let eventList = {};

// if(currentHour > 7 && currentHour < 19){
//     if(currentHour < getElementsByClassName(".event"))
// } if(currentHour >= 19){

// }

for(i=8; i < 19; i++){
    if(currentHour < i){
        document.getElementById(`${i}h`).style = "background-color: #fafafa; color: black;";
    } if(currentHour == i){
        document.getElementById(`${i}h`).style = "background-color: #2C4251; color: white; border-right: 3px solid white;";
    } if(currentHour > i){
        document.getElementById(`${i}h`).style = "background-color: #ebebeb; color: black;";
    } if(currentHour > 18){
        document.getElementById("notification").textContent = `It's ${currentHourUS}.00${amPm}. Your workday is over and all events are completed. Check back tomorrow!`;
    }
} 