import { HomePo } from '../support/home.po';
import { SignUpPo } from '../support/sign-up.po';
import {getInitials, getRandom} from '../helper/utils';
import {NewFreelancerPo} from '../support/new-freelancer.po';
import {PaymentsPo} from '../support/payments.po';
import {browser} from 'protractor';
import {SearchProjectPo} from '../support/search-project.po';
import { signUpAsFreelancer } from '../helper/auth-utils';
import { LoginPo } from '../support/login.po';
import { DashboardPo } from '../support/dashbord.po';

describe('Sigh up functionality', () => {

  const searchProjectPage = new SearchProjectPo();
  const homePage = new HomePo();
  const loginPage = new LoginPo();
  const dashboardPage = new DashboardPo();

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
    userId: '@antonolkhovskyi'
  };

  it('check sign up as freelancer', async () => {
    await signUpAsFreelancer(newAccountData);

    expect(await browser.getCurrentUrl()).toContain('/search/projects'); // урлы повыносить в PO
    expect(await searchProjectPage.textUserInitials.getText()).toEqual(getInitials(newAccountData.firstName, newAccountData.lastName));
    expect(await searchProjectPage.textUserName.getText()).toEqual(newAccountData.userId);
  });

  it('check login', async () => {
    await homePage.open();
    await homePage.linkLogin.click();
    await loginPage.inputUserName.sendKeys(antonAccountData.email);
    await loginPage.inputPassword.sendKeys(antonAccountData.password);
    await loginPage.btnLogin.click();

    expect(await browser.getCurrentUrl()).toContain('/dashboard'); // урлы повыносить в PO
    expect(await dashboardPage.textUserInitials.getText()).toEqual(getInitials(antonAccountData.firstName, antonAccountData.lastName));
    expect(await dashboardPage.textUserName.getText()).toEqual(antonAccountData.userId);
  });


  it('check edit profile info card', async () => {

  });

  it('check add experiance', async () => {

  });
});

