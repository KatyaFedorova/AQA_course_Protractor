import {HomePo} from '../support/home.po';
import {LoginPo} from '../support/login.po';
import { browser } from 'protractor';
import { getInitials } from '../helper/utils';
import { DashboardPo } from '../support/dashbord.po';

describe('Login functionality', () => {

  const homePage = new HomePo();
  const loginPage = new LoginPo();
  const dashboardPage = new DashboardPo();

  const antonAccountData = {
    email: 'anton.olkhovskyi@valor-software.com',
    password: 'bc?+c6QW@Cpv6u&',
    firstName: 'Anton',
    lastName: 'Olkhovskyi',
    userId: '@antonolkhovskyi'
  };

  it('check login', async () => {
    await homePage.open();
    await homePage.linkLogin.click();
    await loginPage.inputUserName.sendKeys(antonAccountData.email);
    await loginPage.inputPassword.sendKeys(antonAccountData.password);
    await loginPage.btnLogin.click();

    expect(await browser.getCurrentUrl()).toContain('/dashboard');
    expect(await dashboardPage.textUserInitials.getText()).toEqual(getInitials(antonAccountData.firstName, antonAccountData.lastName));
    expect(await dashboardPage.textUserName.getText()).toEqual(antonAccountData.userId);
  });
