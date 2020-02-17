import { LoginPo } from '../pages/login.po';
import { ProfilePo } from '../pages/profile.po';
import { HeaderPo } from '../pages/header.po';
import { AccountDataMock } from '../data/account-data.mock';
import { concatEducationDetailsString } from "../helper/utils";
import {browser} from "protractor";

describe('Sigh up functionality', () => {

  const loginPage = new LoginPo();
  const header = new HeaderPo();
  const profilePage = new ProfilePo();

  const { email, password, education, professionalHeadline, summary, hourRate } = AccountDataMock;

  beforeAll(async () => {
    await loginPage.open();
    await loginPage.login(email, password);
    await header.openUserProfile();
  });

  afterEach(async () => {
    await browser.manage().deleteAllCookies();
  });

  it('should edit profile info card', async () => {
    await profilePage.turnOnEditMode();
    await profilePage.editProfileDescription(professionalHeadline, summary, hourRate);
    await profilePage.turnOffEditMode();

    await expect(await profilePage.getHeadlineText()).toEqual(professionalHeadline);
    await expect(await profilePage.getProfSummaryText()).toEqual(summary);
    await expect(await profilePage.getHourRateText()).toEqual(hourRate);
  });

  it('should add education item', async () => {
    await profilePage.turnOnEditMode();
    await profilePage.addEducationItem(education);
    await profilePage.turnOffEditMode();

    expect(await profilePage.getEducationDegree()).toEqual(education.degree);
    expect(profilePage.getEducationDetails()).toEqual(concatEducationDetailsString(education));
  });
});


