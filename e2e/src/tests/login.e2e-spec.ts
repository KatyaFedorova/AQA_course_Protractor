import { browser } from 'protractor';

import { formatUserName } from '../helper/utils';
import { LoginPo } from '../pages/login.po';
import { DashboardPo } from '../pages/dashbord.po';
import { AccountDataMock } from '../data/account-data.mock';
import { DataProvider } from '../data/data-provider';


6. Что касательно подобной реализации:
  `await profilePage.iconEditProfHeadline.click();
 await profilePage.setInputValue(profilePage.inputProfHeadline, accountData.professionalHeadline);`

Нужно подобные клики, вводы в инпут филды и т.д. обернуть в методы в PO. Поскольку для второго теста тебе придется снова делать всю эту цепочку:
  - создать экземпляр класса
- вызвать веб элемент
- вызвать метод для манипуляции с этим элеметом.

  В результате, а) слишком длинная строка выходит, б) а если нужно будет ожидание добавить или какое-то специфический трюк сделать, это тоже в тесте будет?
  По итогу, после переноса в пейдж обжекты будут красивые тесты
  `await profilePage.clickEditProfileIcon();
 await profilePage.setProfileHeadline(stringValue);`
c) ты не светишь вебэлементы в спеках. Для этого сделай их приватными внутри ПО.

7. Что касается логин тестов.
1) Для теста логин, где ввод в поле email и в поле password являются сами по себе шагами теста, нужно такие действия явно прописывать. Объединенный метод login уже лучше юзать для тех тестов, где это не является основным шагом из тест кейса, к пр. банально в прекондишине.
2) Нужно добавить тест для негативного сценария, когда были введены неверные данные. Проверить ошибку валидации и что пользователь остался в форме логина.

8. Когда создаешь отдельные объекты с датасетом и затем вытягиваешь значения в тесте, юзай деструктуризацию. Получается лаконично и читабельно, к пр.:
`  it('check add education item', async () => {
     const {education: {country, university, degree, startYear, endYear}} = accountData; // наша деструктуризация объекта
     
     ...
     await profilePage.selectorCountry(country); // непосредственно уже передача значения в метод
    ...
   });`
​
9. В названии тестов лучше начинать со слова should, i.e "should be able to edit user profile" or 'should verify ...'





describe('Login functionality', () => {

  const accountData = AccountDataMock;

  const loginPage = new LoginPo();
  const dashboardPage = new DashboardPo();

  it('check ability to login', async () => {
    await loginPage.open();
    await this.waitForVisible(this.inputUserName);
    await this.clearAndSetInputValue(this.inputUserName, accountData.email);
    await this.clearAndSetInputValue(this.inputPassword, accountData.password);
    await this.btnLogin.click();

    expect(await browser.getCurrentUrl()).toContain(dashboardPage.url);
    expect(await dashboardPage.textWelcomeBack.getText()).toEqual(DataProvider.dashboardPage.welcomeText);
    expect(await dashboardPage.textUserInitials.getText()).toEqual(formatUserName(accountData.firstName, accountData.lastName));
    expect(await dashboardPage.textUserName.getText()).toEqual('@' + accountData.userId);
  });
});

