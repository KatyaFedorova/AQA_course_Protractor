import {browser, ElementFinder, ExpectedConditions} from "protractor";

export class BaseComponent {
  url: string = '/';
  IMPLICITLY_WAIT = 5000;

  async open() {
    await browser.get(this.url);
  }

  async waitForUrl(timeout?: number) {
    await browser.wait(ExpectedConditions.urlIs(browser.baseUrl + this.url), timeout);
  }

  async click(element: ElementFinder) {
    await this.waitForVisible(element);
    await element.click();
  }

  async sendKeys(element: ElementFinder, value: string) {
    await this.waitForVisible(element);
    await console.log(await element.getText());
    await element.clear();
    await element.sendKeys(value);
  }

  async selectElement(element: ElementFinder, text: string) {
    await this.waitForVisible(element);
    return element.sendKeys(text);
  }

  async waitForVisible(element: ElementFinder, timeout = this.IMPLICITLY_WAIT) {
    await browser.wait(ExpectedConditions.visibilityOf(element), timeout);
  }

  async waitForInVisible(element: ElementFinder,  timeout = this.IMPLICITLY_WAIT) {
    await browser.wait(ExpectedConditions.invisibilityOf(element), timeout);
  }

  async waitForStale(element: ElementFinder,  timeout = this.IMPLICITLY_WAIT) {
    await browser.wait(ExpectedConditions.stalenessOf(element), timeout);
  }

}
