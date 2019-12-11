import {HomePo} from '../support/home.po';
import {SignUpPo} from '../support/sign-up.po';
import {NewFreelancerPo} from '../support/new-freelancer.po';
import {PaymentsPo} from '../support/payments.po';
import {LoginPo} from "../support/login.po";

const homePage = new HomePo();
const signUpPage = new SignUpPo();
const newFreelancerPage = new NewFreelancerPo();
const paymentPage = new PaymentsPo();
const loginPage = new LoginPo();

export async function signUpAsFreelancer(newAccountData) {
  await homePage.open();

  await homePage.buttonWantWork.click();

  await signUpPage.inputEmail.sendKeys(newAccountData.email);
  await signUpPage.inputPassword.sendKeys(newAccountData.password);
  await signUpPage.buttonSignUp.click();

  await signUpPage.inputUserName.sendKeys(newAccountData.userId);
  await signUpPage.buttonNext.click();

  await signUpPage.buttonIWantWork.click();

  await newFreelancerPage.linkSkillIT.click();
  await newFreelancerPage.checkboxMySql.click();
  await newFreelancerPage.buttonNext.click();

  await newFreelancerPage.inputFirstName.sendKeys(newAccountData.firstName);
  await newFreelancerPage.inputLastName.sendKeys(newAccountData.lastName);
  await newFreelancerPage.buttonLevelBeginner.click();

  await paymentPage.linkSkipForNow.click();

  await paymentPage.linkSkipForNow.click();
}

export async function login(email: string, password:string) {
  await homePage.open();
  await homePage.linkLogin.click();
  await loginPage.inputUserName.sendKeys(email);
  await loginPage.inputPassword.sendKeys(password);
  await loginPage.btnLogin.click();
}

