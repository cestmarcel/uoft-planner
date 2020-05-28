 // Enabling Bootstrap tooltips
 $(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

// Load events from local storage
function loadEvent(id){
    if(localStorage.getItem(id) && localStorage.getItem(id) != "Open, click to edit"){
        document.getElementById(id).innerHTML = `<p contentEditable><b>${localStorage.getItem(id)}</b></p>`;
    } else {
        document.getElementById(id).innerHTML = `<p contentEditable>Open, click to edit</p>`;
    }
}

for(i=8; i<19; i++){
    loadEvent(i);
}

// Creating object to store events
let events = {};

// Logging current date in header
document.getElementById("header-date").textContent = moment().format("MMM DD, YYYY");

// Log current hour
let currentHour = moment().format("H");
let currentHourUS = moment().format("h");
let amPm = currentHour > 11 ? "pm" : "am";
let timeslots = document.getElementsByClassName("event");
let eventList = {};

// Color code timeslots based on past/active/future
for(i=8; i < 19; i++){
    if(currentHour < i){
        document.getElementById(`${i}`).style = "background-color: #fafafa; color: black;";
    } if(currentHour == i){
        document.getElementById(`${i}`).style = "background-color: #2C4251; color: white; border-right: 3px solid white;";
    } if(currentHour > i){
        document.getElementById(`${i}`).style = "background-color: #dbdbdb; color: black;";
    } if(currentHour > 18){
        document.getElementById("notification").textContent = `It's ${currentHourUS}.00${amPm}. Your workday is over and all events are completed. Check back tomorrow!`;
    }
} 

// Update timeslot based on user input
function updateTimeslot(id){
    document.getElementById(id).textContent = events[id];
}

// Add to events based on user input
function addEvent(id){
    if(document.getElementById(id).textContent != "Open, click to edit"){
        var input = document.getElementById(id).textContent.trim();
        events[id] = input;
        localStorage.setItem(id, input);
        loadEvent(id);
    }
}

// Clear schedule
function clearSchedule(){
    events = {};
    for(i=8; i<19; i++){
        if(localStorage.getItem(i)){
            localStorage.removeItem(i);
        }
    }
    for(i=8; i<19; i++){
        loadEvent(i);
    }
    $('#confirmClear').modal("hide");
}