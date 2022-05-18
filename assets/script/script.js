//Displays current date and time in header
var todayDate = moment();
$("#currentDay").text(todayDate.format("MMMM Do YYYY, h:mm:ss a"));
console.log(todayDate);
