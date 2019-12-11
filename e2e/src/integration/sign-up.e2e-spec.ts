import { HomePo } from '../support/home.po';
import { SignUpPo } from '../support/sign-up.po';
import {getInitials, getRandom} from '../helper/utils';
import {NewFreelancerPo} from '../support/new-freelancer.po';
import {PaymentsPo} from '../support/payments.po';
import {browser} from 'protractor';
import {SearchProjectPo} from '../support/search-project.po';
import {login, signUpAsFreelancer} from '../helper/auth-utils';
import { LoginPo } from '../support/login.po';
import { DashboardPo } from '../support/dashbord.po';
import {HeaderPo} from "../support/header.po";
import {ProfilePo} from "../support/profile.po";

describe('Sigh up functionality', () => {

  const searchProjectPage = new SearchProjectPo();
  const homePage = new HomePo();
  const loginPage = new LoginPo();
  const dashboardPage = new DashboardPo();
  const header = new HeaderPo();
  const profilePage = new ProfilePo();

  const newAccountData = {
    email: `valor+${ getRandom() }@gmail.com`,
    password: 'valor1@',
    firstName: 'Ivan',
    lastName: 'Ivanov',
    userId: 'valor+${ getRandom() }'
  };

  const antonAccountData = {
    email: 'anton.olkhovskyi@valor-software.com',
    password: 'bc?+c6QW@Cpv6u&',
    firstName: 'Anton',
    lastName: 'Olkhovskyi',
    userId: '@antonolkhovskyi',

    professionalHeadline: `QA engineer ${ getRandom() }`,
    summary: `Worked as QA more than ${ getRandom() } years`,
    hourRate: getRandom().toString()
  };

  it('check sign up as freelancer', async () => {
    await signUpAsFreelancer(newAccountData);

    expect(await browser.getCurrentUrl()).toContain('/search/projects'); // урлы повыносить в PO
    expect(await searchProjectPage.textUserInitials.getText()).toEqual(getInitials(newAccountData.firstName, newAccountData.lastName));
    expect(await searchProjectPage.textUserName.getText()).toEqual(newAccountData.userId);
  });

  it('check login', async () => {
    await login(antonAccountData.email, antonAccountData.password);

    expect(await browser.getCurrentUrl()).toContain('/dashboard'); // урлы повыносить в PO
    expect(await dashboardPage.textUserInitials.getText()).toEqual(getInitials(antonAccountData.firstName, antonAccountData.lastName));
    expect(await dashboardPage.textUserName.getText()).toEqual(antonAccountData.userId);
  });

  it('check edit profile info card', async () => {
    await login(antonAccountData.email, antonAccountData.password);
    await header.openUserProfile();

    await profilePage.click(profilePage.btnEdit);
    await profilePage.click(profilePage.iconEditProfHeadline);
    await profilePage.sendKeys(profilePage.inputProfHeadline, antonAccountData.professionalHeadline);
    await profilePage.click(profilePage.btnSaveProfHeadline);
    await profilePage.click(profilePage.iconEditProfSummary);
    await profilePage.sendKeys(profilePage.inputProfSummary, antonAccountData.summary);
    await profilePage.click(profilePage.btnSaveProfSummary);
    await profilePage.click(profilePage.iconEditHourRate);
    await profilePage.sendKeys(profilePage.inputHourRate, antonAccountData.hourRate);
    await profilePage.click(profilePage.btnSaveHourRate);

    await profilePage.click(profilePage.btnViewProfile);

    await expect(await profilePage.textProfHeadline.getText()).toEqual(antonAccountData.professionalHeadline);
    await expect(await profilePage.textProfSummary.getText()).toEqual(antonAccountData.summary);
    await expect(await profilePage.textHourRate.getText()).toEqual(antonAccountData.hourRate);

  });

  it('check add education', async () => {
    await login(antonAccountData.email, antonAccountData.password);
    await header.openUserProfile();


  });

  it('check user is online after login', async () => {

  });

  // добавить логаут после каждого теста?
});

