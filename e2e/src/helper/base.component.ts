import {browser, ElementFinder, ExpectedConditions as EC} from 'protractor';

export class BaseComponent {
  url = '/';
  IMPLICITLY_WAIT = 5000;

  async open(additionalPath: string = ''):Promise<void> {
    await browser.get(this.url + additionalPath);
  }

  async clearAndSetInputValue(element: ElementFinder, value: string) {
    await element.clear();
    await element.sendKeys(value);
  }

  async waitForVisible(element: ElementFinder, timeout = this.IMPLICITLY_WAIT) {
    await browser.wait(EC.visibilityOf(element), timeout);
  }
}
