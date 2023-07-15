const axios = require("axios");
const fs = require("fs");

const username = "keenwarrior";
const url = "https://api.github.com/users/" + username;

axios.get(url).then((response) => {
  // console.log(response.data);
  const data = response.data;
  fs.writeFile(`${username}.json`, JSON.stringify(data), (err) => {
    if (err) {
      console.log(err);
    }
  });
});
