'use strict';

const phonebook = {
  mila: {
    name: 'Mila',
    phone: '999',
  },
  mila2: {
    name: 'Mila2',
    phone: '9992',
  },
  mila3: {
    name: 'Mila3',
    phone: '9993',
  },
  mila4: {
    name: 'Mila4',
    phone: '9994',
  },
  mila5: {
    name: 'Mila5',
    phone: '9995',
  },
};

const findPhoneByName = name => phonebook[name];
// const findPhoneByName = name => {
//   for (const person in phonebook) {
//     const user = phonebook[person];
//     if (user.name === name) {
//       return user.phone;
//     }
//   }
//   return 'Not found';
// };

// console.log(findPhoneByName('mila2'));
module.exports = { phonebook, findPhoneByName };
