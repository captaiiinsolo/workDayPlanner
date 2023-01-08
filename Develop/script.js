// Appends the current date and  time to #currentDay located in the header section on index.html 
function displayCurrent() {
var displayCurrentDay = dayjs().format('MMM DD, YYYY [at ]h:mm:ss A');
$('#currentDay').text(displayCurrentDay);
}



// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  
  // Adds event listener to hour-9 saveBtn
  $('#hour-9 button').on('click', function() {
    var h9 = document.getElementById('h9').value;
    localStorage.setItem('hour-9', h9);
    console.log(h9)
  });

  // Adds event listener to hour-10 saveBtn
  $('#hour-10 button').on('click', function() {
    var h10 = document.getElementById('h10').value;
    localStorage.setItem('hour-10', h10);
    console.log(h10)
  });

  // Adds event listener to hour-11 saveBtn
  $('#hour-11 button').on('click', function() {
    var h11 = document.getElementById('h11').value;
    localStorage.setItem('hour-11', h11);
    console.log(h11)
  });

  // Adds event listener to hour-12 saveBtn
  $('#hour-12 button').on('click', function() {
    var h12 = document.getElementById('h12').value;
    localStorage.setItem('hour-12', h12);
    console.log(h12)
  });

  // Adds event listener to hour-1 saveBtn
  $('#hour-1 button').on('click', function() {
    var h1 = document.getElementById('h1').value;
    localStorage.setItem('hour-1', h1);
    console.log(h1)
  });

  // Adds event listener to hour-2 saveBtn
  $('#hour-2 button').on('click', function() {
    var h2 = document.getElementById('h2').value;
    localStorage.setItem('hour-2', h2);
    console.log(h2)
  });

  // Adds event listener to hour-3 saveBtn
  $('#hour-3 button').on('click', function() {
    var h3 = document.getElementById('h3').value;
    localStorage.setItem('hour-3', h3);
    console.log(h3)
  });

  // Adds event listener to hour-4 saveBtn
  $('#hour-4 button').on('click', function() {
    var h4 = document.getElementById('h4').value;
    localStorage.setItem('hour-4', h4);
    console.log(h4)
  });

  // Adds event listener to hour-5 saveBtn
  $('#hour-5 button').on('click', function() {
    var h5 = document.getElementById('h5').value;
    localStorage.setItem('hour-5', h5);
    console.log(h5)
  });
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  // Gets saved textarea inputs from local storge and sets them in the correct hour on the hour sheet
  var storedh9 = localStorage.getItem('hour-9', storedh9);
  document.getElementById('hour-9').value = storedh9;

  // 
  var storedh10 = localStorage.getItem('hour-10', storedh10);
  document.getElementById('hour-10').value = storedh10;

  // 
  var storedh11 = localStorage.getItem('hour-11', storedh11);
  document.getElementById('hour11').value = storedh11;

  // 
  var storedh12 = localStorage.getItem('hour-12', storedh12);
  document.getElementById('hour-12').value = storedh12;

  // 
  var storedh1 = localStorage.getItem('hour-1', storedh1);
  document.getElementById('hour-1').value = storedh1;

  // 
  var storedh2 = localStorage.getItem('hour-2', storedh2);
  document.getElementById('hour-2').value = storedh2;

  // 
  var storedh3 = localStorage.getItem('hour-3', storedh3);
  document.getElementById('hour-3').value = storedh3;

  // 
  var storedh4 = localStorage.getItem('hour-4', storedh4);
  document.getElementById('hour-4').value = storedh4;

  // 
  var storedh5 = localStorage.getItem('hour-5', storedh5);
  document.getElementById('hour-5').value = storedh5;
  // TODO: Add code to display the current date in the header of the page.\
  // calls the displayCurrent() function
  displayCurrent();

  // Sets the interval of displayCurrent() to count the time in current seconds.
  setInterval(displayCurrent, 1000);
 
});
