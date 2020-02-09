import { browser } from 'protractor';

import { formatUserName } from '../helper/utils';
import { LoginPo } from '../support/login.po';
import { DashboardPo } from '../support/dashbord.po';
import { AccountDataMock } from '../data/account-data.mock';
import { DataProvider } from '../data/data-provider';

describe('Login functionality', () => {

  const accountData = AccountDataMock;

  const loginPage = new LoginPo();
  const dashboardPage = new DashboardPo();

  it('check ability to login', async () => {
    await loginPage.open();
    await loginPage.login(accountData.email, accountData.password);

    expect(await browser.getCurrentUrl()).toContain(dashboardPage.url);
    expect(await dashboardPage.textWelcomeBack.getText()).toEqual(DataProvider.dashboardPage.welcomeText);
    expect(await dashboardPage.textUserInitials.getText()).toEqual(formatUserName(accountData.firstName, accountData.lastName));
    expect(await dashboardPage.textUserName.getText()).toEqual('@' + accountData.userId);
  });
});

