import {browser, ElementFinder, ExpectedConditions} from "protractor";

export class BaseComponent {

  async click(element: ElementFinder) {
    await this.waitForVisible(element);
    await element.click();
  }

  async sendKeys(element: ElementFinder, value: string) {
    await element.clear();
    await element.sendKeys(value);
  }



  async navigateTo() {
    await browser.get(this.pageUrl);
  }

  getTitle() {
    return browser.getTitle();
  }

  getCurrentUrl() {
    return browser.getCurrentUrl();
  }

  async waitForVisible(element: ElementFinder) {
    await browser.wait(ExpectedConditions.visibilityOf(element));
  }

  async waitForInVisible(element: ElementFinder, timeout?: number) {
    await browser.wait(ExpectedConditions.invisibilityOf(element));
  }

  async pressEsc() {
    await browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
  }

  async switchToDefaultContent() {
    await browser.switchTo().defaultContent();
  }



  async scrollToElement(element: ElementFinder) {
    await browser.executeScript('arguments[0].scrollIntoView()', element.getWebElement());
  }
}
