#!/usr/bin/env node

const axios = require("axios");
const qs = require("qs");
const commandLineArgs = require("command-line-args");
const fs = require("fs");

const optionDefinitions = [
  { name: "path", type: String },
];

const options = commandLineArgs(optionDefinitions);

if(!options.path || !fs.existsSync(options.path)) {
    console.log("Please provide a valid path");
    process.exit(1);
}

const fileContent = fs.readFileSync(options.path, "utf-8");
const fileName = options.path.split("/").pop();

const token = "ddfba64ebbe2186a7f8adc7c1c9b948c";
const url = "https://pastebin.com/api/api_post.php";

const data = {
  api_dev_key: token,
  api_option: "paste",
  api_paste_code: fileContent,
  api_paste_name: fileName,
};

const axiosOptions = {
  method: "POST",
  headers: { "content-type": "application/x-www-form-urlencoded" },
  data: qs.stringify(data),
  url,
};


axios(axiosOptions).then((res) => {
  console.log(res.data);
});
