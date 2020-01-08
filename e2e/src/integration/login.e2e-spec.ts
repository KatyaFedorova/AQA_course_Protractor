import { getInitials } from '../helper/utils';
import { browser } from 'protractor';
import { login } from '../helper/auth-utils';
import { DashboardPo } from '../support/dashbord.po';

const accountData = require('../data/accountData.json');

describe('Sigh up functionality', () => {
  const dashboardPage = new DashboardPo();

  it('check login', async () => {
    await login(accountData.userName, accountData.password);

    expect(await browser.getCurrentUrl()).toContain(dashboardPage.url);
    expect(await dashboardPage.textUserInitials.getText()).toEqual(getInitials(accountData.firstName, accountData.lastName));
    expect(await dashboardPage.textUserName.getText()).toEqual('@' + accountData.nickname);
  })
});

