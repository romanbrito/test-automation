const {Builder, By, Key, until} = require('selenium-webdriver');
const { userName } = require('../config/config');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://www.google.com/ncr');
    await driver.findElement(By.name('q')).sendKeys('Cheese!', Key.RETURN);
    await driver.wait(until.titleIs('Cheese! - Google Search'), 1000);
  } finally {
    await driver.quit();
  }
})();