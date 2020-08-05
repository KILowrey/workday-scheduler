// display current date on page
$('#currentDay').text(moment().format('DD MMMM YYYY'));
// create the currentHour variable
let currentHour = moment().hours(); // where "hours" is the current hour in military time
//console.log the current hour to make sure it works
console.log('currentHour: ' + currentHour);

// create an array of each hour in a day I want a "row" for
const daysHours = [
  { displayH: '7am', militaryH: 7 },
  { displayH: '8am', militaryH: 8 },
  { displayH: '9am', militaryH: 9 },
  { displayH: '10am', militaryH: 10 },
  { displayH: '11am', militaryH: 11 },
  { displayH: '12pm', militaryH: 12 },
  { displayH: '1pm', militaryH: 13 },
  { displayH: '2pm', militaryH: 14 },
  { displayH: '3pm', militaryH: 15 },
  { displayH: '4pm', militaryH: 16 },
  { displayH: '5pm', militaryH: 17 },
  { displayH: '6pm', militaryH: 18 }
];

// create a row with columns for each daysHours using a function for each singular hour
daysHours.forEach (function (oneHour) {
  // created an hourDiv which is a row, with columns inside it.
  const hourDiv =
    $(`<div class='row time-block'> 
    <div class='col-1'>${oneHour.displayH}</div> 
    <textarea class='col-10 description' id='${oneHour.displayH}'></textarea> 
    <button class='saveBtn btn col-1'><i class='fas fa-save fa-3x' src='./save-icon.png' /></button> 
  </div>`);
  // add classes for background color dependent on if it is the past present or future
  if (currentHour === oneHour.militaryH) {
    hourDiv.children("textarea").addClass("present");
  } else if (currentHour > oneHour.militaryH) {
    hourDiv.children("textarea").addClass("past");
  } else if (currentHour < oneHour.militaryH) {
    hourDiv.children("textarea").addClass("future");
  }
  // append the hourDiv to the container
  $('.container').append(hourDiv);
  // displaying the saved content
  let textCont = localStorage.getItem(oneHour.displayH);
  $(`#${oneHour.displayH}`).val(textCont);
});

$(".saveBtn").on("click", function () {
  var textareaEl = $(this).parent().find('textarea');
  var textareaID = textareaEl.attr('id');
  localStorage.setItem(textareaID, textareaEl.val());
});
