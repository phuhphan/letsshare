/**
 * ReviewController
 *
 * @description :: Server-side logic for managing Reviews
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	//Add a space
	add: function (req, res){
		var session_id 	= req.body.session_id;
		var space_id 	= req.body.space_id;
		var text 		= req.body.text;
		var vote 		= req.body.vote;

		User.query("SELECT users.user_id, users.first_name, users.last_name, users.gender FROM users WHERE session_id = '" + session_id + "'", function(err, results) {
          if (err) 
            res.json(Response.fail('This session have issues'));
          else{
            if (results.length > 0) {

				var review = {review_id: GenerateId.reviewId(), user_id: results[0].user_id, description: text, space_id: space_id, created: created,  edited: edited, vote: vote};
 

            	Review.create(review).exec(function(err, result){
                    if (err) {
                        res.json(err);
                    }else{
                        res.json(Response.success(body));
                    }
                });
            }else{
                res.json(Response.fail('This session is expired'));
            }
          }
        });
	},
	listOfSpace: function (req, res){
		var page 		= req.param('page');
		var limited 	= req.param('limited');
		var space_id 	= req.param('space_id');
		var session_id	= req.param('session_id');

		User.query("SELECT users.user_id, users.first_name, users.last_name, users.gender FROM users WHERE session_id = '" + session_id + "'", function(err, results) {
          if (err) 
            res.json(Response.fail('This session have issues'));
          else{
            if (results.length > 0) {

            	var query = "SELECT * FROM reviews WHERE space_id = '" + space_id + "' LIMIT " + (page - 1)*limited +","+ limited;
            	if (limited.toString() === '0') {
            		query = "SELECT * FROM reviews WHERE space_id = '" + space_id + "'";
            	}

            	Review.query(query, function(err, results) {
		          if (err) 
		            res.json(Response.fail('This space have issues'));
		          else{
		            if (results.length > 0) {
                        for (var i = 0; i < results.length; i++) {
                            var review = results[i];
                        }
		            	res.json(Response.success(results));
		            }else{
		                res.json(Response.fail('We have not space for this user'));
		            }
		          }
		        });
            }else{
                res.json(Response.fail('This session is expired'));
            }
          }
        });
	},
	listOfUser: function (req, res){
		var page 		= req.param('page');
		var limited 	= req.param('limited');
		var user_id 	= req.param('user_id');
		var session_id	= req.param('session_id');

		User.query("SELECT users.user_id, users.first_name, users.last_name, users.gender FROM users WHERE session_id = '" + session_id + "'", function(err, results) {
          if (err) 
            res.json(Response.fail('This session have issues'));
          else{
            if (results.length > 0) {
            	var userId = results[0].user_id;
            	if (user_id.toString() !== '0') {
            		userId = user_id;
            	}

            	var userBody = {user_id:results[0].user_id, first_name:results[0].first_name, last_name:results[0].last_name};

            	var query = "SELECT * FROM reviews WHERE user_id = '" + userId + "' LIMIT " + (page - 1)*limited +","+ limited;
            	if (limited.toString() === '0') {
            		query = "SELECT * FROM reviews WHERE user_id = '" + userId + "'";
            	}

            	Review.query(query, function(err, results) {
		          if (err) 
		            res.json(Response.fail('This user have issues'));
		          else{
		            if (results.length > 0) {
                        for (var i = 0; i < results.length; i++) {
                            var review = results[i];
                        }
		            	res.json(Response.success({space: results}));
		            }else{
		                res.json(Response.fail('We have not space for this user'));
		            }
		          }
		        });
            }else{
                res.json(Response.fail('This session is expired'));
            }
          }
        });
	},
};

