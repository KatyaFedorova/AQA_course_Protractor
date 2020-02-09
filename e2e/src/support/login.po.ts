import { $ } from 'protractor';
import { BaseComponent } from '../helper/base.component';

export class LoginPo extends BaseComponent {
  url = '/login';

  inputUserName = $('#username');
  inputPassword = $('#password');
  btnLogin = $('#login_btn');

  async login(email: string, password:string) {
    // in some cases, protractor says that email and password he set but visually I can see that they are empty.
    // Decided to wait for visibility of the field and then start to act
    await this.waitForVisible(this.inputUserName);
    await this.setInputValue(this.inputUserName, email);
    await this.setInputValue(this.inputPassword, password);
    await this.btnLogin.click();
  }
}
