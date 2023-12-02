const moment = require("moment");

let startTime = moment();

const times = [0, 1, 10];

startTime.add(times[0], "hours");
startTime.add(times[1], "minutes");
startTime.add(times[2], "seconds");

const targetTime = startTime.toDate().getTime();

setInterval(() => {
  let currentTime = moment().toDate().getTime();
  let delta = targetTime - currentTime;
  const hours = Math.floor(delta / (1000 * 60 * 60));
  delta = delta % (60 * 60 * 1000);
  const minutes = Math.floor(delta / (1000 * 60));
  delta = delta % (60 * 1000);
  const seconds = Math.floor(delta / 1000);
  console.log(hours, minutes, seconds);
}, 1000);

// setInterval(() => {
//   let s = "";
//   for (let i = 0; i < 100000000; i++) {
//     s += "a";
//   }
// }, 1000);
