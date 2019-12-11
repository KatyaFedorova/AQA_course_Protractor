import { getInitials } from '../helper/utils';
import { LoginPo } from '../support/login.po';
import { DashboardPo } from '../support/dashbord.po';
import { AccountDataMock } from '../data/account-data.mock';
import { HeaderPo } from '../support/header.po';
import { browser } from 'protractor';
import { ProfilePo } from '../support/profile.po';

const loginPage = new LoginPo();
const dashboardPage = new DashboardPo();
const header = new HeaderPo();
const profilePage = new ProfilePo();

describe('Sigh up functionality', () => {

  const accountData = AccountDataMock;

  beforeEach(async () => {
    await loginPage.open();
    await loginPage.login(accountData.email, accountData.password);
    await header.waitForVisible(header.buttonUserSettings);
  });

  xit('check login', async () => {
    expect(await browser.getCurrentUrl()).toContain(dashboardPage.url);
    expect(await dashboardPage.textUserInitials.getText()).toEqual(getInitials(accountData.firstName, accountData.lastName));
    expect(await dashboardPage.textUserName.getText()).toEqual(accountData.userId);
  });

  fit('check user is online after login', async () => {
    await header.openUserProfile();

    await profilePage.waitForVisible(profilePage.iconOnline);
    expect(await profilePage.textOnline.isDisplayed()).toBe(true);
    const greenColorId = 'rgba(93, 194, 106, 1)';
    expect(await profilePage.textOnline.getCssValue('color')).toBe(greenColorId);
    expect(await profilePage.iconOnline.getCssValue('background-color')).toBe(greenColorId); // TODO: заморочиться и дожаться пока елемент не станер stail
  });
});

