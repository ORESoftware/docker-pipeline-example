'use strict';

process.stdin.resume().on('data', d => {
  console.log('consumer:', String(d));
});