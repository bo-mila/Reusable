'use strict';

const phonebook = [
  {
    name: 'Mila',
    phone: '999',
  },
  {
    name: 'Mila2',
    phone: '9992',
  },
  {
    name: 'Mila3',
    phone: '9993',
  },
  {
    name: 'Mila4',
    phone: '9994',
  },
  {
    name: 'Mila5',
    phone: '9995',
  },
];

const findPhoneByName = name => {
  for (const obj of phonebook) {
    if (obj.name === name) return obj.phone;
  }
};

module.exports = { phonebook, findPhoneByName };
