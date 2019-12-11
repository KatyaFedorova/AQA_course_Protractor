import { $, browser } from 'protractor';
import { BaseComponent } from '../helper/base.component';

export class LoginPo extends BaseComponent {
  url: string = '/login';

  inputUserName = $('#username');
  inputPassword = $('#password');
  btnLogin = $('#login_btn');
  messageError = $('.form-error');

  async login(email: string, password:string) {
    await this.sendKeys(this.inputUserName, email);
    await this.sendKeys(this.inputPassword, password);
    await this.waitForInVisible(this.messageError);
    await this.click(this.btnLogin); // TODO: does not work in 100%
  }
}
