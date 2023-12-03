import { Builder, By, Browser } from "selenium-webdriver";
import { test, it, beforeAll } from "@jest/globals";

describe("Check icon sizes", () => {
  let driver = null;
  beforeAll(async () => {
    driver = await new Builder().forBrowser(Browser.CHROME).build();
    await driver.get("https://www.google.com/search?q=Hello+World");
  }, 60000);

  afterAll(async () => {
    await driver.quit();
  }, 60000);

  it("Check icon size for voice", async () => {
    const voiceSearchDiv = await driver.findElement(
      By.css('div[aria-label="Search by voice"]')
    );

    try {
      const svg = await voiceSearchDiv.findElement(By.css("svg"));
      expect(svg).toBeTruthy();
    } catch (error) {
      expect(error).toBeNull();
    }
  }, 60000);

  it("Check icon size for voice", async () => {
    const searchDiv = await driver.findElement(
      By.css('button[aria-label="Search"]')
    );
    expect(searchDiv).toBeTruthy();
  }, 60000);
});
