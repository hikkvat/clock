const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');
const time = document.querySelector('#time');
const dateTime = document.querySelector('#date');
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

setInterval(() => {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let day = now.getDay();
  let date = now.getDate();
  let month = now.getMonth();
  let year = now.getFullYear();

  hr.style.transform = `rotateZ(${(hours * 30) + (minutes * deg / 12)}deg)`;
  mn.style.transform = `rotateZ(${minutes * deg}deg)`;
  sc.style.transform = `rotateZ(${seconds * deg}deg)`;

  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  date = date < 10 ? "0" + date : date;

  time.innerHTML = hours + ":" + minutes + ":" + seconds;
  dateTime.innerHTML = dayNames[day] + ", " + monthNames[month] + " " + date + ", " + year;
}, 1000)
