import {$} from 'protractor';
import { BaseComponent } from '../helper/base.component';

export class SignUpPo extends BaseComponent {
  url = '/signup';
  inputEmail = $('#new-email');
  inputPassword = $('#new-password');
  buttonSignUp = $('#signup_btn');
  inputUserName = $('#new-username');
  buttonNext = $('[class*=submitBtn]');
  buttonIWantWork = $('fl-account-type-selector .Modal-body>div:nth-of-type(1)');
}
