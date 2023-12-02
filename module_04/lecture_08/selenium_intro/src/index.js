import { Builder, By, Browser } from "selenium-webdriver";
import fs from "fs/promises";

async function steps() {
  let driver = await new Builder().forBrowser(Browser.CHROME).build();
  await driver.get("https://www.google.com/search?q=Hello+World");

  await driver.sleep(1000);

  // const input = await driver.findElement(By.xpath('//*[@id="APjFqb"]'));

  // await input.sendKeys("Hello World\n");

  // await driver.sleep(2000);

  // const search = await driver.findElement(By.id("search"));

  const voiceSearchDiv = await driver.findElement(By.css('div[aria-label="Search by voice"]'));
  // await voiceSearchDiv.click();

  const ssbase64 = await voiceSearchDiv.takeScreenshot();

  var buffer = Buffer.from(ssbase64, 'base64');
  await fs.writeFile('./screenshot.png', buffer);

  // const anchors = await search.findElements(By.css("a"));
  
  // const linksPromises = anchors.map(async (anchor) => {
  //   return await anchor.getAttribute("href");
  // });

  // const links = await Promise.all(linksPromises);
  // console.log(links); 
}

steps();
