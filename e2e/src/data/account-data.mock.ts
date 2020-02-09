import { getRandom } from '../helper/utils';

export const AccountDataMock = {
  email: 'anton.olkhovskyi@valor-software.com',
  password: 'bc?+c6QW@Cpv6u&',
  firstName: 'Anton',
  lastName: 'Olkhovskyi',
  userId: 'antonolkhovskyi',

  professionalHeadline: `QA engineer ${ getRandom() }`,
  summary: `Worked as QA more than ${ getRandom() } years. My favorite joke about QA is: A QA engineer walks into a ` +
  `bar. Orders a beer. Orders 0 beers. Orders 99999999999 beers. Orders a lizard. Orders -1 beers. Orders av` +
  `ueicbksjdhd. First real customer walks in and asks where the bathroom is. The bar bursts into flames, killing ` +
    `everyone.`,
  hourRate: getRandom().toString(),

  education: {
  country: 'Algeria',
    university: 'Centre Universitaire El Tarf',
    degree: 'Master of Science',
    startYear: '2010',
    endYear: '2015',
  }
};
