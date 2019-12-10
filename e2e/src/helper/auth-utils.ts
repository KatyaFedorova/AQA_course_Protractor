import {HomePo} from '../support/home.po';
import {SignUpPo} from '../support/sign-up.po';
import {NewFreelancerPo} from '../support/new-freelancer.po';
import {PaymentsPo} from '../support/payments.po';

export async function signUpAsFreelancer(email: string, password: string, userName: string) {
  const homePage = new HomePo();
  const signUpPage = new SignUpPo();
  const newFreelancerPage = new NewFreelancerPo();
  const paymentPage = new PaymentsPo();

  await homePage.open();

  await homePage.buttonWantWork.click();

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
}

