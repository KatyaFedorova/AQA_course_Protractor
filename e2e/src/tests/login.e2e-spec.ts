import { browser } from 'protractor';

import { formatUserName } from '../helper/utils';
import { LoginPo } from '../pages/login.po';
import { DashboardPo } from '../pages/dashbord.po';
import { accountData } from '../data/account-data.mock';
import { DataProvider } from '../data/data-provider';

describe('Login functionality', () => {

  const { email, password, userId, firstName, lastName } = accountData;

  const loginPage = new LoginPo();
  const dashboardPage = new DashboardPo();

  beforeEach(async() => {
    await loginPage.open();
  });

  afterEach(async () => {
    await browser.manage().deleteAllCookies();
  });

  it('check ability to login with CORRECT password and email', async () => {
    await loginPage.login(email, password);

    expect(await dashboardPage.isUrlOpen()).toBe(true);
    expect(await dashboardPage.getWelcomeText()).toEqual(DataProvider.dashboardPage.welcomeText);
    expect(await dashboardPage.getUserInitials()).toEqual(formatUserName(firstName, lastName));
    expect(await dashboardPage.getUserId()).toEqual('@' + userId);
  });

  it('check ability to login with INCORRECT password', async () => {
    await loginPage.login(email, 'incorrect_pass');

    expect(await loginPage.isUrlOpen()).toBe(true);
    const errorMessage = 'Incorrect username or password provided.';
    expect(await loginPage.getPasswordErrorText()).toContain(errorMessage);
  });

  it('check ability to login with INCORRECT email', async () => {
    await loginPage.login('incorrect_email', password);

    expect(await loginPage.isUrlOpen()).toBe(true);
    const errorMessage = 'Please enter a valid username or email address.';
    expect(await loginPage.getEmailErrorText()).toEqual(errorMessage);
  });
});
