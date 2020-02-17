import { $ } from 'protractor';
import { BaseComponent } from '../helper/base.component';

export class LoginPo extends BaseComponent {
  readonly url = '/login';

  readonly inputUserName = $('#username');
  readonly inputPassword = $('#password');
  readonly btnLogin = $('#login_btn');
  readonly textPswrdErrorMessage = $('.alert-error span');
  readonly textEmailErrorMessage = $('.form-error');

  async login(email: string, password: string) {
    // in some cases(1/10), protractor says that email and password he set but visually I can see that they are empty.
    // Decided to wait for visibility of the field and then start to act
    await this.waitForVisible(this.inputUserName);
    await this.clearAndSetInputValue(this.inputUserName, email);
    await this.clearAndSetInputValue(this.inputPassword, password);
    await this.btnLogin.click();
  }

  async login(email: string, password: string) {
    // in some cases(1/10), protractor says that email and password he set but visually I can see that they are empty.
    // Decided to wait for visibility of the field and then start to act
    await this.waitForVisible(this.inputUserName);
    await this.clearAndSetInputValue(this.inputUserName, email);
    await this.clearAndSetInputValue(this.inputPassword, password);
    await this.btnLogin.click();
  }
}
