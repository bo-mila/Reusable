'use strict';

const fn = () => {
  const obj1 = { name: 'Mila' };
  let obj2 = { name: 'Alex' };
  obj1.name = 'no Mila';
  obj2.name = 'no Alex';
  const obj3 = { noName: 'anonimus' };
  obj2 = obj3;
  obj3.noName = 'Alex';
};

module.exports = { fn };
