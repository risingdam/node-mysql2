'use strict';

const common = require('../../common');
const connection = common.createConnection();
const assert = require('assert');

let rows;
connection.execute(
  'SELECT ? AS trueValue, ? AS falseValue',
  [true, false],
  function(err, _rows) {
    if (err) {
      throw err;
    }
    rows = _rows;
    connection.end();
  }
);

process.on('exit', function() {
  assert.deepEqual(rows, [{ trueValue: 1, falseValue: 0 }]);
});
