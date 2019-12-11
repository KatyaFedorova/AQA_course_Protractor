import { SignUpPo } from '../support/sign-up.po';
import { NewFreelancerPo } from '../support/new-freelancer.po';
import { PaymentsPo } from '../support/payments.po';

const signUpPage = new SignUpPo();
const newFreelancerPage = new NewFreelancerPo();
const paymentPage = new PaymentsPo();

export async function signUpAsFreelancer(newAccountData) {
  await signUpPage.open();

  await signUpPage.sendKeys(signUpPage.inputEmail, newAccountData.email);
  await signUpPage.sendKeys(signUpPage.inputPassword, newAccountData.password);
  await signUpPage.click(signUpPage.buttonSignUp);

  await signUpPage.sendKeys(signUpPage.inputUserName, newAccountData.userId);
  await signUpPage.click(signUpPage.buttonNext);

  await signUpPage.click(signUpPage.buttonIWantWork);

  await newFreelancerPage.click(newFreelancerPage.linkSkillIT);
  await newFreelancerPage.click(newFreelancerPage.checkboxMySql);
  await newFreelancerPage.click(newFreelancerPage.buttonNext);

  await newFreelancerPage.sendKeys(newFreelancerPage.inputFirstName, newAccountData.firstName);
  await newFreelancerPage.sendKeys(newFreelancerPage.inputLastName, newAccountData.lastName);
  await newFreelancerPage.click(newFreelancerPage.buttonLevelBeginner);

  await paymentPage.click(paymentPage.linkSkipForNow);

  await paymentPage.click(paymentPage.linkSkipForNow);
}

