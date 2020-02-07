import { browser } from 'protractor';

import { formatUserName } from '../helper/utils';
import { signUpAsFreelancer } from '../helper/auth-utils';
import { SearchProjectPo } from '../support/search-project.po';
import { NewAccountDataMock } from '../data/new-account-data.mock';
import { HeaderPo } from '../support/header.po';

describe('Sigh up functionality', () => {

  const newAccountData = NewAccountDataMock;

  const header = new HeaderPo();
  const searchProjectPage = new SearchProjectPo();

  // Probably we need to skip this test - too many steps for registration, several steps we need to skip (for example, add payment card)
  it('check sign up as freelancer', async () => {
    await signUpAsFreelancer(newAccountData);

    expect(await browser.getCurrentUrl()).toContain(searchProjectPage.url);
    expect(await header.textUserName.getText()).toEqual(formatUserName(newAccountData.firstName, newAccountData.lastName));
    expect(await header.textUserName.getText()).toEqual('@' + newAccountData.userId);
  });
});

