
var passport = require('passport-strategy'),
  util = require('util');

function Strategy(verify) {
	if (!verify) {
		throw new TypeError('SessionsStrategy requires a verify callback');
	}
	passport.Strategy.call(this);
	this.name = 'sessions';
	this._verify = verify;
}

util.inherits(Strategy, passport.Strategy);

Strategy.prototype.authenticate = function (req, options) {
	var self = this;

	function verified(err, user, info) {
		if (err) {
			return self.error(err);
		}
		if (!user) {
			return self.fail(info);
		}
		self.success(user, info);
	}

	try {
		if (this._verify.length === 3) {
			this._verify(req, req.session, options, verified);
		}
		else {
			this._verify(req,req.session, verified);
		}
	} catch (ex) {
		return self.error(ex);
	}
};

module.exports = Strategy;