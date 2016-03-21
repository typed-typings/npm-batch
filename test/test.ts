import test = require('blue-tape');
import Batch = require('batch');

const batch = new Batch();
test('simple', (t) => {
  batch.push((cb) => {
    cb(null);
  });
  batch.end(t.end);
});


