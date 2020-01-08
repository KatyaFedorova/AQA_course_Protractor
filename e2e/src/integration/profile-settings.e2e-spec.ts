import {login} from '../helper/auth-utils';
import {ProfilePo} from "../support/profile.po";

const accountData = require('../data/accountData.json');
const education = require('../data/education.json');

describe('Sigh up functionality', () => {

  const profilePage = new ProfilePo();

  beforeAll(async () => {
    await login(accountData.userName, accountData.password);
    await profilePage.navigateTo(accountData.nickname);
  });

  it('verify profile info card after login', async () => {
    const userName = `${accountData.firstName} ${accountData.lastName[0]}.`;
    expect(await profilePage.userName.getText()).toEqual(userName);// checksystax, why ir hightlined
    expect(await profilePage.textProfHeadline.getText()).toEqual(accountData.profHeadline);
    expect(await profilePage.textDescription.getText()).toEqual(accountData.description);
    expect(await profilePage.textHourRate.getText()).toEqual(accountData.hourRate);
    expect(await profilePage.nickname.getText()).toEqual('@' + accountData.nickname);
  });

  it('check adding education item', async () => {
    await profilePage.removeEducationItems();

    await profilePage.addEducationItem(education);

    expect(await profilePage.textDegree.getText()).toEqual(education.degree);
    expect(await profilePage.educationSchoolName.getText()).
      toEqual(`${education.university}, ${education.country}`);
    const educationDuration = +education.endYear - +education.startYear;
    const educationDate = `${education.startYear} - ${education.endYear} (${educationDuration} ${profilePage.getEducationDurationPeriodName(educationDuration)})`;
    expect(await profilePage.educationDate.getText()).toEqual(educationDate); // обрати внимание сконкантинировало строки из двух елементов (су так сделать не смог) перепроверить
    expect(await profilePage.educationItem.count()).toBe(1);
  });
});
