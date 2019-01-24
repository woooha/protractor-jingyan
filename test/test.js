const protractor = require('../built/index');

const p = new protractor.Protractor('/dev/tty.wchusbserial1410');

p.result.subscribe((result) => {
  console.log(result);
});
