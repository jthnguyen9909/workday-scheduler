$(function () {
  var today = dayjs();
  // Displays current day in header section
  $("#currentDay").text(today.format("dddd, MMMM D, YYYY"));
  // empty array for storing every working hour that day
  var hourBlock = [];
  // for loop to set a time for each hour block
  for (i = 9; i < 18; i++) {
    hourIndex = i - 9;
    hourBlock.push(dayjs(today.hour(i).minute(0).second(0)));
    // if current time is later than hour set for that hour block, past class
    if (today.isAfter(hourBlock[hourIndex])) {
      $(".hour-blocks").children().eq(hourIndex).addClass("past");
    }
    // current hour is same as hour of block, present class
    if (today.isSame(hourBlock[hourIndex], "hour")) {
      $(".hour-blocks").children().eq(hourIndex).addClass("present");
    }
    //current time is before hour block of the day, future class
    if (today.isBefore(hourBlock[hourIndex])) {
      $(".hour-blocks").children().eq(hourIndex).addClass("future");
    }
  }

  // save button get element
  var saveButton = $(".saveBtn");
  // add event listener for each save button saving the text value and id of "this"
  saveButton.on("click", function () {
    var hourText = $(this).siblings(".description").val();
    var hourTime = $(this).parent().attr("id");
    // set local storage to store text value with key value of id attribute
    localStorage.setItem(hourTime, hourText);
  });

  // loads local storage items into each description class of each hour-block id
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));
});
