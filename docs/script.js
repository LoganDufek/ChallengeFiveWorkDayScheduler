
//First step, get the ID of the p element in the header and apply Moment to it to get the current date
var currentDay = document.getElementById("currentDay");

var currentMoment = moment().format('dddd, MMMM Do YYYY'); 

currentDay.innerHTML = currentMoment;

