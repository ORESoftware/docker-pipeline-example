'use strict';

const os = require('os');

process.on('SIGINT', s => {
  process.exit(1);
});

process.on('uncaughtException', (e) => {
  console.error('Uncaught exception:', e.message || e);
});

process.on('unhandledRejection', (e) => {
  console.error('Unhandled rejection:', e.message || e);
});


let i = 0;

const getRandomStr = () => {
  let i = 0, res = '';
  while (i++ < 12) {
    res += String.fromCharCode(65 + Math.floor(Math.random() * 26));
  }
  return res;
  
};

// log.setFields({zebra: '5', car: 'choose'});

(function run() {
  
  console.log({zebra: 'blues', dog: 'not cat'}, i++, 'fanny');
  console.log(i++, 'just saying hi.');
  console.log(i++, 'shit hit the fan');
  
  console.log(i++, getRandomStr());
  console.log(i++, getRandomStr());
  console.log(i++, getRandomStr());
  
  console.log(JSON.stringify({
    id: '@truvia',
    appName: 'garbo',
    message: i++ + ' ' + getRandomStr() + '  XXXZ',
    host: os.hostname(),
    level: 'INFO',
    pid: process.pid,
    date: new Date().toUTCString(),
    fields: {a: 'foo', b: 5}
  }));
  
  setTimeout(run, 200);
  
})();
