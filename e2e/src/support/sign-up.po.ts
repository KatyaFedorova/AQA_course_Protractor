import {$} from 'protractor';

export class SignUpPo {
    inputEmail = $('#new-email');
    inputPassword = $('#new-password');
    buttonSignUp = $('signup_btn');
    inputUserName = $('new-username');
    buttonNext = $('[class*=submitBtn]');
    buttonIWantWork = $('fl-account-type-selector .Modal-body>div:nth-of-type(1)');
}
