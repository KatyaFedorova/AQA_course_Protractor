import {browser, by, ElementFinder, ExpectedConditions} from "protractor";

export class BaseComponent {
  pageUrl;

  async click(element: ElementFinder) {
    await this.waitForElementToBeClickable(element);
    await element.click();
  }

  async select(element: ElementFinder, value: string) {
    await this.waitForVisible(element);
    await element.element(by.cssContainingText('option', value)).click();
  }

  async sendKeys(element: ElementFinder, value: string) {
    await element.clear();
    await element.sendKeys(value);
  }

  async navigateTo(additionalParams = '') {
    await browser.get(this.pageUrl + additionalParams);
  }

  async getValue(element: ElementFinder): Promise<string> {
    return  element.getAttribute('value');
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

  async waitForElementToBeClickable(element: ElementFinder) {
    await browser.wait(ExpectedConditions.elementToBeClickable(element));
  }

  async waitForInVisible(element: ElementFinder, timeout?: number) {
    await browser.wait(ExpectedConditions.invisibilityOf(element));
  }

  async switchToDefaultContent() {
    await browser.switchTo().defaultContent();
  }

  async scrollToElement(element: ElementFinder) {
    await browser.executeScript('arguments[0].scrollIntoView()', element.getWebElement());
  }
}
