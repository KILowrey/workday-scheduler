// display current date on page
$('#currentDay').text(moment().format('DD MMMM YYYY'));

// create an array of each hour in a day I want a "row" for
const daysHours = [
  '7am',
  '8am',
  '9am',
  '10am',
  '11am',
  '12pm',
  '1pm',
  '2pm',
  '3pm',
  '4pm',
  '5pm',
  '6pm'
]; // these are equal to "ha" when using moment.js

// create a row with columns for each daysHours using a function for each singular hour
daysHours.forEach (function (oneHour) {
  // created an hourDiv which is a row, with columns inside it.
  const hourDiv = $(`<div class='row time-block'> <div class='col-1'>${oneHour}</div> <textarea class='col-10' value='${oneHour}'></textarea> <button class='saveBtn btn col-1></button> </div>`);
  // append the hourDiv to the container
  $('.container').append(hourDiv);
});