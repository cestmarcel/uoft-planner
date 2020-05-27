// Logging current date in header
document.getElementById("header-date").textContent = moment().format("MMM DD, YYYY");

// Log current hour
var currentHour = moment().format("H");

if(currentHour > 8 && currentHour < 19){

} else {
    
}