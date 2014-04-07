var util = require('util');

function BadRequestError(param, message) {
    Error.call(this);
    Error.captureStackTrace(this, arguments.callee);
    this.name = 'BadRequestError';
    this.param = param || null;
    this.message = message || null;
};

util.inherits(BadRequestError, Error);

module.exports = BadRequestError;
