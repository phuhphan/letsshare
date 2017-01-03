/**
 * TransactionController
 *
 * @description :: Server-side logic for managing Transactions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	booking: function (req, res){
		var session_id    = req.body.session_id;
        var space_id      = req.body.space_id;
        var date          = req.body.date;
        var hour          = req.body.hour;
        var type          = req.body.type;
        var accommodation = req.body.accommodation;
        var payment_id    = req.body.payment_id;
        var message       = req.body.message;

	},
	check_coupon_code: function (req, res){
        var session_id    = req.body.session_id;
        var space_id      = req.body.space_id;
        var coupon_code   = req.body.coupon_code;

	},
	listBooking: function (req, res){
		var page          = req.param('page');
        var limited       = req.param('limited');
        var session_id    = req.param('session_id');
	},
	listShare: function (req, res){
        var page          = req.param('page');
		var limited       = req.param('limited');
        var session_id    = req.param('session_id');

	},
    detail: function (req, res){
        var transaction_id  = req.param('transaction_id');
        var session_id      = req.param('session_id');

    },
    update: function (req, res){
        var session_id    = req.body.session_id;
        var space_id      = req.body.type;

    }
};

