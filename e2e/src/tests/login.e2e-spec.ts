import { browser } from 'protractor';

import { formatUserName } from '../helper/utils';
import { LoginPo } from '../pages/login.po';
import { DashboardPo } from '../pages/dashbord.po';
import { AccountDataMock } from '../data/account-data.mock';
import { DataProvider } from '../data/data-provider';

describe('Login functionality', () => {

  const accountData = AccountDataMock;

  const { email, password, userId, firstName, lastName } = accountData;

  const loginPage = new LoginPo();
  const dashboardPage = new DashboardPo();

  beforeAll(async () = > {
    await loginPage.open();
  })

  it('check ability to login with CORRECT password and email', async () => {
    await loginPage.login(email, password);

    expect(await browser.getCurrentUrl()).toContain(dashboardPage.url);
    expect(await dashboardPage.textWelcomeBack.getText()).toEqual(DataProvider.dashboardPage.welcomeText);
    expect(await dashboardPage.textUserInitials.getText()).toEqual(formatUserName(firstName, lastName));
    expect(await dashboardPage.textUserName.getText()).toEqual('@' + userId);
  });

  it('check ability to login with INCORRECT password', async () => {
    await loginPage.login(email, 'incorrect_pass');

    expect(await browser.getCurrentUrl()).toContain(loginPage.url);
    const errorMessage = 'Incorrect username or password provided.';
    expect(await loginPage.textPswrdErrorMessage.getText()).toEqual(errorMessage);
  });

  it('check ability to login with INCORRECT email', async () => {
    await loginPage.login('incorrect_email', password);

    expect(await browser.getCurrentUrl()).toContain(loginPage.url);
    const errorMessage = 'Please enter a valid username or email address.';
    expect(await loginPage.textPswrdErrorMessage.getText()).toEqual(errorMessage);
  });
});
