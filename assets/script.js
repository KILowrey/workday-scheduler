// display current date on page
$('#currentDay').text(moment().format('DD MMMM YYYY'));

// create an array of each hour in a day I want a "row" for
const daysHours = [
  '6am',
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

// create a "row" for each daysHours using a function for each singular hour
daysHours.forEach (function (oneHour) {
  //create the hour element connected to a div
  const hourEl = $('<div>');
  // make the text for hourEl be oneHour of each daysHours
  hourEl.text(oneHour);
  // append hourEl to the div with the id 'schedule'
  $('#schedule').append(hourEl);
});