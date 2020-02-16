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
    await profilePage.iconEditProfHeadline.click();
    await profilePage.setInputValue(profilePage.inputProfHeadline, accountData.professionalHeadline);
    await profilePage.btnSaveProfHeadline.click();
    await profilePage.iconEditProfSummary.click();
    await profilePage.setInputValue(profilePage.inputProfSummary, accountData.summary);
    await profilePage.btnSaveProfSummary.click();
    await profilePage.iconEditHourRate.click();
    await profilePage.setInputValue(profilePage.inputHourRate, accountData.hourRate);
    await profilePage.btnSaveHourRate.click();

    await profilePage.btnViewProfile.click();

    await expect(await profilePage.textProfHeadline.getText()).toEqual(accountData.professionalHeadline);
    await expect(await profilePage.textProfSummary.getText()).toEqual(accountData.summary);
    await expect(await profilePage.textHourRate.getText()).toEqual(accountData.hourRate);
  });

  it('check add education item', async () => {
    await profilePage.btnEdit.click();
    await profilePage.btnAddEducation.click();
    await profilePage.selectorCountry.sendKeys(accountData.education.country);
    await profilePage.selectorUniversity.sendKeys(accountData.education.university);
    await profilePage.inputDegree.sendKeys(accountData.education.degree);
    await profilePage.selectorStartYear.sendKeys(accountData.education.startYear);
    await profilePage.selectorEndYear.sendKeys(accountData.education.endYear);
    await profilePage.btnSaveEducation.click();

    expect(await profilePage.textDegree.getText()).toEqual(accountData.education.degree);
    const educationDuration = +accountData.education.endYear - +accountData.education.startYear;
    const educationDetails = `${accountData.education.university}, ${accountData.education.country} ` +
                              `${accountData.education.startYear} - ${accountData.education.endYear} ` +
                              `(${educationDuration} years)`;
    expect(await profilePage.textEducationDetails.getText()).toEqual(educationDetails);
  });

  // TODO: check that items count increase, if we will have free time
});


