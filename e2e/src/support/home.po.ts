import {$, browser} from 'protractor';

export class HomePo { // why we need "export" key word?
    buttonWantWork = $('[data-uitest-target="work-link"]');
    linkLogin = $('[href="login"]');

    open() {
      return browser.get('');
  }
}
