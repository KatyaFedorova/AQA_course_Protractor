import {HomePo} from '../support/home.po';
import {LoginPo} from '../support/login.po';

describe('Login functionality', () => {

  const homePage = new HomePo();
  const loginPage = new LoginPo();

  it('check login', async () => {
    await homePage.open();
    await homePage.linkLogin.click();
    await loginPage.inputUserName.sendKeys('anton.olkhovskyi@valor-software.com');
    await loginPage.inputPassword.sendKeys('bc?+c6QW@Cpv6u&');
    await loginPage.btnLogin.click();

  });
});
