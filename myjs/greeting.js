
// addZero() Function
function addZero(i){
  // Add zeroes when time has 0
  // Algorithm:
  // - if 10 is more than index
  //  - add a zero before non-zero number
  // - return i;
  if(i<10){
    i = '0' + i;
  }
  return i;
}

// updateClock() function
function updateClock(){
  // Displays floating clock
  var today = new Date();                         // allocate Date
  //var monthNow = today.getMonth();

  var hourNow = addZero(today.getHours());
  var minutesNow = addZero(today.getMinutes());
  var secondsNow = addZero(today.getSeconds());
  var greeting;

  var time = 'Current time: ' + hourNow + ':' + minutesNow +
                 ':' + secondsNow;

  var monthStr = new Array();

  monthStr[0] = "January";
  monthStr[1] = "February";
  monthStr[2] = "March";
  monthStr[3] = "April";
  monthStr[4] = "May";
  monthStr[5] = "June";
  monthStr[6] = "July";
  monthStr[7] = "August";
  monthStr[8] = "September";
  monthStr[9] = "October";
  monthStr[10] = "November";
  monthStr[11] = "December";

  var monthNow = monthStr[today.getMonth()];
  var dayNow = today.getDay();
  var yearNow = today.getFullYear();
  var date = 'Today is: ' + monthNow + ' ' + dayNow + ', ' + yearNow;

  var imagetime;
  var backgroundtime;

  if(hourNow > 18){
    greeting = 'Good evening!';
    imagetime = "<img src='images/moon.png'>";

  }
  else if(hourNow > 12){
    greeting = 'Good afternoon!';
    imagetime = "<img src='images/sun.png'>";
  }
  else if(hourNow > 5){
    greeting = 'Good morning!';
    imagetime = "<img src='images/sun.png'>";
  }
  else{
    greeting = 'Still awake?';
    imagetime = "<img src='images/moon.png'>";
    backgroundtime = "#141d26";

  }

  document.getElementById("background")
  //background.style.backgroundColor = backgroundtime;

  document.getElementById("daynight");
  daynight.innerHTML = imagetime;

  document.getElementById("greet");
  greet.innerHTML ='<h3>' + greeting + '</h3>';

  document.getElementById("calendar");
  calendar.innerHTML = '<h5>' + date + '</h5>';

  document.getElementById("clock");
  clock.innerHTML = '<h5>' + time + '</h5>';

  var t = setTimeout(updateClock, 1000);
}
updateClock();
