
import {LoginPo} from "../support/login.po";
import {HeaderPo} from "../support/header.po";

const loginPage = new LoginPo();
const header = new HeaderPo();

export async function login(email: string, password:string) {
  await loginPage.navigateTo();
  await loginPage.inputUserName.sendKeys(email);
  await loginPage.inputPassword.sendKeys(password);
  await loginPage.btnLogin.click();
  await header.waitForVisible(header.iconUserSubDetails);

}

