import { HomePo } from '../support/home.po';
import { SignUpPo } from '../support/sign-up.po';
import {getInitials, getRandom} from '../helper/utils';
import {NewFreelancerPo} from '../support/new-freelancer.po';
import {PaymentsPo} from '../support/payments.po';
import {browser} from 'protractor';
import {SearchProjectPo} from '../support/search-project.po';

describe('Sigh up functionality', () => {

  const homePage = new HomePo();
  const signUpPage = new SignUpPo();
  const newFreelancerPage = new NewFreelancerPo();
  const paymentPage = new PaymentsPo();
  const searchProjectPage = new SearchProjectPo();

  it('check sign up as freelancer', async () => {
    await homePage.open();
    await homePage.buttonWantWork.click();
    const email = `valor+${ getRandom() }@gmail.com`;
    const password = 'valor1@';
    const userName = `valor+${ getRandom() }`;
    await signUpPage.inputEmail.sendKeys(email);
    await signUpPage.inputPassword.sendKeys(password);
    await signUpPage.buttonSignUp.click();
    await signUpPage.inputUserName.sendKeys(userName);
    await signUpPage.buttonNext.click();
    await signUpPage.buttonIWantWork.click();
    await newFreelancerPage.linkSkillIT.click();
    await newFreelancerPage.checkboxMySql.click();
    await newFreelancerPage.buttonNext.click();
    const firstName = 'Ivan';
    const lastName = 'Ivanov';
    await newFreelancerPage.inputFirstName.sendKeys(firstName);
    await newFreelancerPage.inputLastName.sendKeys(lastName);
    await newFreelancerPage.buttonLevelBeginner.click();
    await paymentPage.linkSkipForNow.click();
    await paymentPage.linkSkipForNow.click();

    expect(await browser.getCurrentUrl()).toContain('/search/projects');
    expect(await searchProjectPage.textUserInitials.getText()).toEqual(getInitials(firstName, lastName));
    expect(await searchProjectPage.textUserName.getText()).toEqual(userName);
  });
});

