import { LoginPo } from '../support/login.po';
import { ProfilePo } from '../support/profile.po';
import { browser } from 'protractor';
import { HeaderPo } from '../support/header.po';
import { AccountDataMock } from '../data/account-data.mock';

describe('Sigh up functionality', () => {

  const loginPage = new LoginPo();
  const header = new HeaderPo();
  const profilePage = new ProfilePo();

  const accountData = AccountDataMock;

  beforeEach(async () => {
    await loginPage.open();
    await loginPage.login(accountData.email, accountData.password);
    await header.openUserProfile();
  });

  xit('check edit profile info card', async () => {
    await profilePage.click(profilePage.btnEdit);
    await profilePage.click(profilePage.iconEditProfHeadline);
    await profilePage.sendKeys(profilePage.inputProfHeadline, accountData.professionalHeadline);
    await profilePage.click(profilePage.btnSaveProfHeadline);
    await profilePage.click(profilePage.iconEditProfSummary);
    await profilePage.sendKeys(profilePage.inputProfSummary, accountData.summary);
    await profilePage.click(profilePage.btnSaveProfSummary);
    await profilePage.click(profilePage.iconEditHourRate);
    await profilePage.sendKeys(profilePage.inputHourRate, accountData.hourRate);
    await profilePage.click(profilePage.btnSaveHourRate);

    await profilePage.click(profilePage.btnViewProfile);

    await expect(await profilePage.textProfHeadline.getText()).toEqual(accountData.professionalHeadline);
    await expect(await profilePage.textProfSummary.getText()).toEqual(accountData.summary);
    await expect(await profilePage.textHourRate.getText()).toEqual(accountData.hourRate);
  });

  xit('check add education', async () => {
    await profilePage.click(profilePage.btnEdit);
    await profilePage.click(profilePage.btnAddEducation);
    await profilePage.selectElement(profilePage.selectorCountry, accountData.education.country);
    await profilePage.waitForVisible(profilePage.selectorUniversity);
    await browser.sleep(1000000);
    await profilePage.sendKeys(profilePage.selectorUniversity, accountData.education.university);
    await profilePage.selectElement(profilePage.inputDegree, accountData.education.degree);
    await profilePage.selectElement(profilePage.selectorStartYear, accountData.education.startYear);
    await profilePage.selectElement(profilePage.selectorEndYear, accountData.education.endYear);
    await profilePage.click(profilePage.btnSaveEducation);

    expect(await profilePage.textDegree.getText()).toEqual(accountData.education.degree);
    const educationDuration = +accountData.education.endYear - +accountData.education.startYear;
    const educationDetails = `${accountData.education.university}, ${accountData.education.country} 
                              ${accountData.education.startYear} - ${accountData.education.endYear} 
                              (${educationDuration} years)`;
    expect(await profilePage.textEducationDetails.getText()).toEqual(educationDetails);
    expect(await profilePage.educationItem.count()).toEqual(1);

    // TODO: add remove added item
  });


