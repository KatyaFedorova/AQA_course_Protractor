import { SignUpPo } from '../support/sign-up.po';
import { RegistrCompleteProfilePo } from '../support/registr-complete-profile.po';
import { RegistrSelectPaymentMethodPo } from '../support/registr-select-payment-method.po';
import { RegistrSelectSkillsPo } from '../support/registr-select-skills.po';
import { RegistrStartTrialPo } from '../support/registr-start-trial.po';

const signUpPage = new SignUpPo();
const regSelectSkillsPage = new RegistrSelectSkillsPo();
const regCompleteProfilePage = new RegistrCompleteProfilePo();
const regSelectPaymentMethodPage = new RegistrSelectPaymentMethodPo();
const regStartTrialPage = new RegistrStartTrialPo();

export async function signUpAsFreelancer(newAccountData) {
  await signUpPage.open();

  await signUpPage.sendKeys(signUpPage.inputEmail, newAccountData.email);
  await signUpPage.sendKeys(signUpPage.inputPassword, newAccountData.password);
  await signUpPage.click(signUpPage.buttonSignUp);

  await signUpPage.sendKeys(signUpPage.inputUserName, newAccountData.userId);
  await signUpPage.click(signUpPage.buttonNext);

  await signUpPage.click(signUpPage.buttonIWantWork);

  await regSelectSkillsPage.click(regSelectSkillsPage.linkSkillIT);
  await regSelectSkillsPage.click(regSelectSkillsPage.checkboxMySql);
  await regSelectSkillsPage.click(regSelectSkillsPage.buttonNext);

  await regCompleteProfilePage.sendKeys(regCompleteProfilePage.inputFirstName, newAccountData.firstName);
  await regCompleteProfilePage.sendKeys(regCompleteProfilePage.inputLastName, newAccountData.lastName);
  await regCompleteProfilePage.click(regCompleteProfilePage.buttonLevelBeginner);

  await regCompleteProfilePage.click(regCompleteProfilePage.buttonNext);

  await regSelectPaymentMethodPage.click(regSelectPaymentMethodPage.linkSkipForNow);

  await regStartTrialPage.click(regStartTrialPage.linkSkipForNow);
}

