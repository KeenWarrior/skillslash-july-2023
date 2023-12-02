let startTime = new Date().getMilliseconds();

setInterval(() => {
  let currentTime = new Date().getMilliseconds();
  let delta = currentTime - startTime;
  const hours = Math.floor(delta / (1000 * 60 * 60));
    delta -= hours * 3600000;
  const minutes = Math.floor(delta / (1000 * 60));
  delta -= minutes * (60 * 1000);
  const seconds = Math.floor(
    (delta - hours * 3600000 - minutes * 60000) / 1000
  );
  console.log(hours, minutes, seconds);
}, 1000);

setInterval(() => {
  let s = "";
  for (let i = 0; i < 100000000; i++) {
    s += "a";
  }
}, 1000);
