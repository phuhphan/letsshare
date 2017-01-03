/**
 * Review.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  	attributes: {
	  	autoCreatedAt: false,
	    autoUpdatedAt: false,
	    tableName : 'reviews',
	    attributes: {
	        review_id: {
	            type			: 'string',
	            columnName		: 'review_id',
	            primaryKey      : true,
	            unique          : true,
	        },
	        user_id: {
		      	model: 'User',
		    },
		    space_id: {
		      	model: 'Space',
		    },
	        description: {
	            type			: 'text',
	            columnName		: 'description',
	        },
	        vote: {
	            type			: 'integer',
	            columnName		: 'vote',
	        },
	        created: {
	            type			: 'date',
	            columnName		: 'created',
	        },
	        edited: {
	            type			: 'date',
	            columnName		: 'edited',
	        },
	    }
  	}
};

