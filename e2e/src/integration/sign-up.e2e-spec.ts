import { getInitials, getRandom } from '../helper/utils';
import { signUpAsFreelancer } from '../helper/auth-utils';
import { browser } from 'protractor';
import { SearchProjectPo } from '../support/search-project.po';
import { NewAccountDataMock } from '../data/new-account-data.mock';

describe('Sigh up functionality', () => {

  const searchProjectPage = new SearchProjectPo();

  const newAccountData = NewAccountDataMock;

  xit('check sign up as freelancer', async () => {
    await signUpAsFreelancer(newAccountData);

    expect(await browser.getCurrentUrl()).toContain(searchProjectPage.url);
    expect(await searchProjectPage.textUserInitials.getText()).toEqual(getInitials(newAccountData.firstName, newAccountData.lastName));
    expect(await searchProjectPage.textUserName.getText()).toEqual('@' + newAccountData.userId);
  });
});

