// alert("date js");
const todayDay = document.querySelector(".today_day");
const todayDate = document.querySelector(".today_date");

const date = new Date();
var curDate = date.getDate();
var day = date.getDay();
var month = date.getMonth();
var arrDay = ["SUN", "MON", "TUES", "WED", "THURS", "FRI", "SAT"];
day = arrDay[day];
var arrMonth = [
  "JAN",
  "FEB",
  "MAR",
  "APRIL",
  "MAY",
  "JUNE",
  "JULY",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];
month = arrMonth[month];
console.log(day + " " + month);
todayDay.innerText = `${day}DAY`;
todayDate.innerText = `${curDate} ${month}`;
