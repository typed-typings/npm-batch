/// <reference path="bundle.d.ts" />

import Batch = require('batch')

const batch = new Batch()

batch.push((cb) => cb(null))

batch.end((err) => console.log(err || 'Done!'))
