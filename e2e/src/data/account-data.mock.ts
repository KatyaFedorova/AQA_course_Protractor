import { getRandom } from '../helper/utils';

export const AccountDataMock = {
  email: 'anton.olkhovskyi@valor-software.com',
  password: 'bc?+c6QW@Cpv6u&',
  firstName: 'Anton',
  lastName: 'Olkhovskyi',
  userId: '@antonolkhovskyi',

  professionalHeadline: `QA engineer ${ getRandom() }`,
  summary: `Worked as QA more than ${ getRandom() } years`,
  hourRate: getRandom().toString(),

  education: {
  country:'Algeria',
    university:'New York University',
    degree:'Master of Science',
    startYear:'2010',
    endYear:'2015',
}
};
