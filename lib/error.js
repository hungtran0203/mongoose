var MongooseError = require('./error/error')
module.exports = exports = MongooseError;

/**
 * The default built-in validator error messages.
 *
 * @see Error.messages #error_messages_MongooseError-messages
 * @api public
 */

MongooseError.messages = require('./error/messages');

// backward compat
MongooseError.Messages = MongooseError.messages;

/*!
 * Expose subclasses
 */

MongooseError.CastError = require('./error/cast');
MongooseError.ValidationError = require('./error/validation');
MongooseError.ValidatorError = require('./error/validator');
MongooseError.VersionError = require('./error/version');
MongooseError.OverwriteModelError = require('./error/overwriteModel');
MongooseError.MissingSchemaError = require('./error/missingSchema');
MongooseError.DivergentArrayError = require('./error/divergentArray');
