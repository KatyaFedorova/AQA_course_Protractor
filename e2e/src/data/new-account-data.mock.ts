import { getRandom } from '../helper/utils';

export const NewAccountDataMock = {
  email: `valor+${ getRandom() }@gmail.com`,
  password: 'valor1@',
  firstName: 'Ivan',
  lastName: 'Ivanov',
  userId: `valor${ getRandom() }`
};
