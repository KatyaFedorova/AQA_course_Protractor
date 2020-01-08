import {$} from 'protractor';
import {BaseComponent} from "../helper/base.component";

export class LoginPo extends BaseComponent {
  pageUrl: string = 'login/';
  inputUserName = $('#username');
  inputPassword = $('#password');
  btnLogin = $('#login_btn');
}
