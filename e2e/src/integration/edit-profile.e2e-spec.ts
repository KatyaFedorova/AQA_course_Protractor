import { LoginPo } from '../support/login.po';
import { ProfilePo } from '../support/profile.po';
import { HeaderPo } from '../support/header.po';
import { AccountDataMock } from '../data/account-data.mock';

describe('Sigh up functionality', () => {

  const loginPage = new LoginPo();
  const header = new HeaderPo();
  const profilePage = new ProfilePo();

  const accountData = AccountDataMock;

  beforeAll(async () => {
    await loginPage.open();
    await loginPage.login(accountData.email, accountData.password);
    await header.waitForVisible(header.buttonUserSettings);
    await header.openUserProfile();
  });

  it('check edit profile info card', async () => {
    await profilePage.btnEdit.click();
    await profilePage.setInputValue(profilePage.inputProfHeadline, accountData.professionalHeadline);
    await profilePage.setInputValue(profilePage.inputProfSummary, accountData.summary);
    await profilePage.setInputValue(profilePage.inputHourRate, accountData.hourRate);
    await profilePage.btnProfileSummary.click();

    await expect(await profilePage.textProfHeadline.getText()).toEqual(accountData.professionalHeadline);
    await expect(await profilePage.textProfSummary.getText()).toEqual(accountData.summary);
    const hourRateString = `$${accountData.hourRate} USD / hour`;
    await expect(await profilePage.textHourRate.getText()).toEqual(hourRateString);
  });

  it('check add education item', async () => {
    await profilePage.btnAddEducation.click();
    await profilePage.selectorCountry.sendKeys(accountData.education.country);
    await profilePage.selectorUniversity.sendKeys(accountData.education.university);
    await profilePage.inputDegree.sendKeys(accountData.education.degree);
    await profilePage.selectorStartYear.sendKeys(accountData.education.startYear);
    await profilePage.selectorEndYear.sendKeys(accountData.education.endYear);
    await profilePage.btnSaveEducation.click();

    expect(await profilePage.textDegree.getText()).toEqual(accountData.education.degree);
    const educationDuration = +accountData.education.endYear - +accountData.education.startYear;
    const educationDetails = `${accountData.education.university}, ${accountData.education.country}\n` +
                              `${accountData.education.startYear} - ${accountData.education.endYear}\n` +
                              `(${educationDuration} years)`;
    expect(await profilePage.textEducationDetails.getText()).toEqual(educationDetails);
  });

  // TODO: check that items count increase, if we will have free time
});


