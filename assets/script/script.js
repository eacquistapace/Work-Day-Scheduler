//Displays current date and time in header
var todayDate = moment();
$("#currentDay").text(todayDate.format("MMMM Do YYYY"));
console.log(todayDate);

//Determines current time to change background for timeblocks (past, present, and future)
function timeTracker() {
  var timeNow = moment().hour();

  $(".time-block").each(function () {
    var blockTime = parseInt($(this).attr("id").split("hour")[1]);

    if (blockTime < timeNow) {
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past");
    } else if (blockTime === timeNow) {
      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).addClass("present");
    } else {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
    }
  });
}

//Call function
timeTracker();

//Save button listener
$(".saveBtn").on("click", function () {
  var text = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");

  // Save text in local storage
  localStorage.setItem(time, text);
  console.log();
});
