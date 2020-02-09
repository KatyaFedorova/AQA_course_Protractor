import {browser, ElementFinder, ExpectedConditions} from "protractor";

export class BaseComponent {
  url: string = '/';
  IMPLICITLY_WAIT = 5000;

  async open(additionalPath: string = ''):Promise<void> {
    await browser.get(this.url + additionalPath);
  }

  async setInputValue(element: ElementFinder, value: string) {
    await element.clear();
    await element.sendKeys(value);
  }

  async waitForVisible(element: ElementFinder, timeout = this.IMPLICITLY_WAIT) {
    await browser.wait(ExpectedConditions.visibilityOf(element), timeout);
  }
}
