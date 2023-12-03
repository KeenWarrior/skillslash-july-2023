const moment = require("moment");

let startTime = moment();

const times = [0, 0, 10];

startTime.add(times[0], "hours");
startTime.add(times[1], "minutes");
startTime.add(times[2], "seconds");

const targetTime = startTime.toDate().getTime();

const interval = setInterval(() => {
  let currentTime = moment().toDate().getTime();
  let delta = targetTime - currentTime;

  if(delta <= 0) {
    delta = 0;
    clearInterval(interval);
  }
  const hours = Math.floor(delta / (1000 * 60 * 60));
  delta = delta % (60 * 60 * 1000);
  const minutes = Math.floor(delta / (1000 * 60));
  delta = delta % (60 * 1000);
  const seconds = Math.floor(delta / 1000);
  console.log(
    new String(hours).padStart(2, "0"),
    new String(minutes).padStart(2, "0"),
    new String(seconds).padStart(2, "0")
  );
}, 1000);

// setInterval(() => {
//   let s = "";
//   for (let i = 0; i < 100000000; i++) {
//     s += "a";
//   }
// }, 1000);
