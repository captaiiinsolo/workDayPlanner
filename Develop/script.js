// Appends the current date and  time to #currentDay located in the header section on index.html 
function displayCurrent() {
var displayCurrentDay = dayjs().format('ddd MMM DD, YYYY [at ]h:mm:ss A');
$('#currentDay').text(displayCurrentDay);
};

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
  });

  // Adds event listener to hour-10 saveBtn
  $('#hour-10 button').on('click', function() {
    var h10 = document.getElementById('h10').value;
    localStorage.setItem('hour-10', h10);
  });

  // Adds event listener to hour-11 saveBtn
  $('#hour-11 button').on('click', function() {
    var h11 = document.getElementById('h11').value;
    localStorage.setItem('hour-11', h11);
  });

  // Adds event listener to hour-12 saveBtn
  $('#hour-12 button').on('click', function() {
    var h12 = document.getElementById('h12').value;
    localStorage.setItem('hour-12', h12);
  });

  // Adds event listener to hour-1 saveBtn
  $('#hour-1 button').on('click', function() {
    var h1 = document.getElementById('h1').value;
    localStorage.setItem('hour-1', h1);
  });

  // Adds event listener to hour-2 saveBtn
  $('#hour-2 button').on('click', function() {
    var h2 = document.getElementById('h2').value;
    localStorage.setItem('hour-2', h2);
  });

  // Adds event listener to hour-3 saveBtn
  $('#hour-3 button').on('click', function() {
    var h3 = document.getElementById('h3').value;
    localStorage.setItem('hour-3', h3);
  });

  // Adds event listener to hour-4 saveBtn
  $('#hour-4 button').on('click', function() {
    var h4 = document.getElementById('h4').value;
    localStorage.setItem('hour-4', h4);
  });

  // Adds event listener to hour-5 saveBtn
  $('#hour-5 button').on('click', function() {
    var h5 = document.getElementById('h5').value;
    localStorage.setItem('hour-5', h5);
  });
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  // Sets currentHour equal to current time as a 2digit value 0-23
  var currentHour = dayjs().hour();

  // compares current hour agains hour of timeblock and toggles the appropriate
  var hour9 = document.getElementById('hour-9').value = 09;

  $('#hour-9').toggleClass(function() {
    if (hour9 < currentHour) {
      return 'past';
    } else if (hour9 > currentHour) {
      return 'future';
    } else {
      return 'present';
    }
  });
  
  // compares current hour agains hour of timeblock and toggles the appropriate
  var hour10 = document.getElementById('hour-10').value = 10;

  $('#hour-10').toggleClass(function() {
    if (hour10 < currentHour) {
      return 'past';
    } else if (hour10 > currentHour) {
      return 'future';
    } else {
      return 'present';
    }
  });
  
  // compares current hour agains hour of timeblock and toggles the appropriate
  var hour11 = document.getElementById('hour-11').value = 11;

  $('#hour-11').toggleClass(function() {
    if (hour11 < currentHour) {
      return 'past';
    } else if (hour11 > currentHour) {
      return 'future';
    } else {
      return 'present';
    }
  });
  
  // compares current hour agains hour of timeblock and toggles the appropriate
  var hour12 = document.getElementById('hour-12').value = 12;

  $('#hour-12').toggleClass(function() {
    if (hour12 < currentHour) {
      return 'past';
    } else if (hour12 > currentHour) {
      return 'future';
    } else {
      return 'present';
    }
  });

  // compares current hour agains hour of timeblock and toggles the appropriate
  var hour1 = document.getElementById('hour-1').value = 13;

  $('#hour-1').toggleClass(function() {
    if (hour1 < currentHour) {
      return 'past';
    } else if (hour1 > currentHour) {
      return 'future';
    } else {
      return 'present';
    }
  });
  
  // compares current hour agains hour of timeblock and toggles the appropriate  
  var hour2 = document.getElementById('hour-2').value = 14;

  $('#hour-2').toggleClass(function() {
    if (hour2 < currentHour) {
      return 'past';
    } else if (hour2 > currentHour) {
      return 'future';
    } else {
      return 'present';
    }
  });
  
  // compares current hour agains hour of timeblock and toggles the appropriate 
  var hour3 = document.getElementById('hour-3').value = 15;

  $('#hour-3').toggleClass(function() {
    if (hour3 < currentHour) {
      return 'past';
    } else if (hour3 > currentHour) {
      return 'future';
    } else {
      return 'present';
    }
  });
  
  // compares current hour agains hour of timeblock and toggles the appropriate  
  var hour4 = document.getElementById('hour-4').value = 16;

  $('#hour-4').toggleClass(function() {
    if (hour4 < currentHour) {
      return 'past';
    } else if (hour4 > currentHour) {
      return 'future';
    } else {
      return 'present';
    }
  });
  
  // compares current hour agains hour of timeblock and toggles the appropriate  
  var hour5 = document.getElementById('hour-5').value = 17;

  $('#hour-5').toggleClass(function() {
    if (hour5 < currentHour) {
      return 'past';
    } else if (hour5 > currentHour) {
      return 'future';
    } else {
      return 'present';
    }
  });

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  
  // Retrieves stored user input and displays it in the correct timeblock textarea 
  var storedH9 = localStorage.getItem('hour-9');
  document.getElementById('h9').value = storedH9;
  
  // Retrieves stored user input and displays it in the correct timeblock textarea 
  var storedH10 = localStorage.getItem('hour-10');
  document.getElementById('h10').value = storedH10;
  
  // Retrieves stored user input and displays it in the correct timeblock textarea 
  var storedH11 = localStorage.getItem('hour-11');
  document.getElementById('h11').value = storedH11;
  
  // Retrieves stored user input and displays it in the correct timeblock textarea 
  var storedH12 = localStorage.getItem('hour-12');
  document.getElementById('h12').value = storedH12;
  
  // Retrieves stored user input and displays it in the correct timeblock textarea 
  var storedH1 = localStorage.getItem('hour-1');
  document.getElementById('h1').value = storedH1;
  
  // Retrieves stored user input and displays it in the correct timeblock textarea 
  var storedH2 = localStorage.getItem('hour-2');
  document.getElementById('h2').value = storedH2;
  
  // Retrieves stored user input and displays it in the correct timeblock textarea 
  var storedH3 = localStorage.getItem('hour-3');
  document.getElementById('h3').value = storedH3;
  
  // Retrieves stored user input and displays it in the correct timeblock textarea 
  var storedH4 = localStorage.getItem('hour-4');
  document.getElementById('h4').value = storedH4;
  
  // Retrieves stored user input and displays it in the correct timeblock textarea 
  var storedH5 = localStorage.getItem('hour-5');
  document.getElementById('h5').value = storedH5;


  // TODO: Add code to display the current date in the header of the page.
  // calls the displayCurrent() function
  displayCurrent();

  // Sets the interval of displayCurrent() to count the time in current seconds.
  setInterval(displayCurrent, 1000);
 
});